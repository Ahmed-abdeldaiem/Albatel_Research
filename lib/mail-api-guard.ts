import { NextResponse } from "next/server";

/** حقل وهمي في JSON — يجب أن يبقى فارغاً (البوتات غالباً تملأه) */
export const MAIL_HONEYPOT_KEY = "_hp";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 24;
/** بعد هذا العدد من المفاتيح نُجري تنظيفاً للذاكرة */
const PRUNE_AT = 4000;

type Bucket = { count: number; windowStart: number };

const rateBuckets = new Map<string, Bucket>();

function pruneBuckets(now: number): void {
  if (rateBuckets.size < PRUNE_AT) return;
  const cutoff = now - WINDOW_MS * 2;
  for (const [ip, b] of rateBuckets) {
    if (b.windowStart < cutoff) rateBuckets.delete(ip);
  }
}

export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first.slice(0, 80);
  }
  const real = req.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 80);
  return "unknown";
}

function isHoneyTrapTripped(body: Record<string, unknown>): boolean {
  const v = body[MAIL_HONEYPOT_KEY];
  if (v === undefined || v === null) return false;
  if (typeof v !== "string") return true;
  return v.trim() !== "";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  pruneBuckets(now);
  const b = rateBuckets.get(ip);
  if (!b || now - b.windowStart > WINDOW_MS) {
    rateBuckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (b.count >= MAX_PER_WINDOW) return true;
  b.count += 1;
  return false;
}

/**
 * حماية طلبات البريد: honeypot + تحديد معدل لكل عنوان IP.
 * يُستدعى مرة واحدة بعد `await req.json()` وبعد التحقق من أن الجسم كائن.
 */
export function assertMailSubmissionAllowed(
  req: Request,
  body: Record<string, unknown>,
): NextResponse | null {
  if (isHoneyTrapTripped(body)) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limit" }, { status: 429 });
  }
  return null;
}
