"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMemo } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useLanguage } from "@/contexts/LanguageContext";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const { t, locale } = useLanguage();

  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().trim().required(t("form.errName")),
        email: Yup.string()
          .trim()
          .email(t("form.errEmail"))
          .required(t("form.errEmail")),
        phone: Yup.string().trim(),
        subject: Yup.string().trim().required(t("form.errSubject")),
        message: Yup.string()
          .trim()
          .min(20, t("form.errMessage"))
          .required(t("form.errMessage")),
      }),
    [t],
  );

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  return (
    <div
      className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl dark:border-white/10 dark:bg-ink-900/70 sm:p-8"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {t("form.title")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {t("form.subtitle")}
      </p>

      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          try {
            const res = await fetch("/api/send-mail", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                kind: "contact",
                name: values.name,
                email: values.email,
                phone: values.phone,
                subject: values.subject,
                message: values.message,
              }),
            });
            if (res.status === 503) {
              toast.error(t("form.toastErrConfig"));
              return;
            }
            if (!res.ok) {
              toast.error(t("form.toastErr"));
              return;
            }
            toast.success(t("form.toastOk"));
            resetForm();
          } catch {
            toast.error(t("form.toastErr"));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-5" lang={locale === "en" ? "en" : "ar"}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("form.name")}
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none ring-brand-400/0 transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("form.email")}
                </label>
                <Field
                  id="email"
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

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("form.phone")}
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("form.subject")}
              </label>
              <Field
                id="subject"
                name="subject"
                type="text"
                className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
              <ErrorMessage
                name="subject"
                component="p"
                className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("form.message")}
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={6}
                className="w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
              />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500">
              {t("form.hint")}
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 disabled:opacity-60 dark:text-ink-950 sm:w-auto sm:px-10"
            >
              <i className="fa-solid fa-envelope-open-text" aria-hidden />
              {isSubmitting ? t("form.submitting") : t("form.submit")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
