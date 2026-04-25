"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useLanguage } from "@/contexts/LanguageContext";
import { getBook, publishedBooks } from "@/lib/books";

type FormValues = {
  bookSlug: string;
  name: string;
  email: string;
  phone: string;
  copies: string;
  city: string;
  notes: string;
};

function bookTitle(t: (k: string) => string, slug: string): string {
  if (slug === "general") return t("pub.order.bookGeneral");
  const b = getBook(slug);
  if (!b) return slug;
  return t(`pub.${b.i18nKey}.title`);
}

export function BookOrderForm() {
  const { t, locale } = useLanguage();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fromQuery = mounted ? searchParams.get("book") : null;
  const initialSlug =
    fromQuery && getBook(fromQuery)?.status === "published" ? fromQuery : "";

  const validationSchema = useMemo(
    () =>
      Yup.object({
        bookSlug: Yup.string().required(t("pub.order.errBook")),
        name: Yup.string().trim().required(t("pub.order.errName")),
        email: Yup.string().trim().email(t("pub.order.errEmail")).required(t("pub.order.errEmail")),
        phone: Yup.string().trim(),
        copies: Yup.number()
          .transform((_, orig) => {
            if (orig === "" || orig === undefined || orig === null) return undefined;
            const n = Number(orig);
            return Number.isFinite(n) ? n : NaN;
          })
          .typeError(t("pub.order.errCopies"))
          .integer(t("pub.order.errCopies"))
          .min(1, t("pub.order.errCopies"))
          .required(t("pub.order.errCopies")),
        city: Yup.string().trim(),
        notes: Yup.string().trim(),
      }),
    [t],
  );

  const initialValues: FormValues = {
    bookSlug: initialSlug || "",
    name: "",
    email: "",
    phone: "",
    copies: "1",
    city: "",
    notes: "",
  };

  const pubList = publishedBooks();

  return (
    <div
      className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl dark:border-white/10 dark:bg-ink-900/70 sm:p-8"
      data-aos="fade-up"
      lang={locale === "en" ? "en" : "ar"}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t("pub.order.title")}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {t("pub.order.subtitle")}
      </p>

      <Formik<FormValues>
        enableReinitialize
        key={initialSlug || "default"}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          const title = bookTitle(t, values.bookSlug);
          try {
            const res = await fetch("/api/send-mail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                kind: "book-order",
                bookSlug: values.bookSlug,
                bookTitle: title,
                name: values.name,
                email: values.email,
                phone: values.phone,
                copies: Number(values.copies),
                city: values.city,
                notes: values.notes,
              }),
            });
            if (res.status === 503) {
              toast.error(t("pub.order.toastErrConfig"));
              return;
            }
            if (!res.ok) {
              toast.error(t("pub.order.toastErr"));
              return;
            }
            toast.success(t("pub.order.toastOk"));
            resetForm();
          } catch {
            toast.error(t("pub.order.toastErr"));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="bookSlug"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("pub.order.bookLabel")}
              </label>
              <Field
                as="select"
                id="bookSlug"
                name="bookSlug"
                className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              >
                <option value="">{locale === "ar" ? "— اختر —" : "— Select —"}</option>
                <option value="general">{t("pub.order.bookGeneral")}</option>
                {pubList.map((b) => (
                  <option key={b.slug} value={b.slug}>
                    {t(`pub.${b.i18nKey}.title`)}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="bookSlug"
                component="p"
                className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="ord-name"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("pub.order.name")}
                </label>
                <Field
                  id="ord-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
                />
              </div>
              <div>
                <label
                  htmlFor="ord-email"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("pub.order.email")}
                </label>
                <Field
                  id="ord-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="ord-phone"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("pub.order.phone")}
                </label>
                <Field
                  id="ord-phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="ord-copies"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("pub.order.copies")}
                </label>
                <Field
                  id="ord-copies"
                  name="copies"
                  type="number"
                  min={1}
                  className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
                />
                <ErrorMessage
                  name="copies"
                  component="p"
                  className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="ord-city"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("pub.order.city")}
              </label>
              <Field
                id="ord-city"
                name="city"
                type="text"
                className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="ord-notes"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("pub.order.notes")}
              </label>
              <Field
                id="ord-notes"
                name="notes"
                as="textarea"
                rows={4}
                className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500">{t("pub.order.hint")}</p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-110 disabled:opacity-60 dark:text-ink-950 sm:w-auto sm:px-10"
            >
              {isSubmitting ? t("pub.order.submitting") : t("pub.order.submit")}
            </button>

            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              <Link href="/publications" className="font-semibold text-brand-600 hover:underline dark:text-brand-400">
                {t("pub.index.breadcrumbPub")}
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}
