import { Field } from "formik";

/**
 * حقل وهمي مخفي — يترك فارغاً من المتصفح؛ البوتات غالباً تملأه فيُرفض الطلب في `/api/send-mail`.
 */
export function MailHoneypotField() {
  return (
    <div
      className="pointer-events-none absolute start-[-9999px] top-0 h-px w-px overflow-hidden opacity-0"
      aria-hidden
    >
      <Field type="text" name="_hp" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
