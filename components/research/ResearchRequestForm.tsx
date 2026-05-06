"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMemo } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useLanguage } from "@/contexts/LanguageContext";
import { isValidPhone } from "@/lib/phone";

// =============================================================================
// نموذج المشاركة البحثية — يُرسل البيانات إلى /api/send-mail
// نوع الطلب يُرسل بقيم ثابتة (proposal | review | partnership | methodology | supervision)
// نوع المجال يُرسل بقيم ثابتة (humanities-social, economics-management, ...)
// النصوص الظاهرة للمستخدم تأتي من i18n (ar/en).
// =============================================================================

const REQUEST_TYPES = [
  { id: "proposal", icon: "fa-file-lines" },
  { id: "review", icon: "fa-magnifying-glass-plus" },
  { id: "partnership", icon: "fa-handshake-angle" },
  { id: "methodology", icon: "fa-lightbulb" },
  { id: "supervision", icon: "fa-graduation-cap" },
] as const;

const RESEARCH_AREAS = [
  "humanities-social",
  "economics-management",
  "law",
  "education",
  "media",
  "islamic-studies",
  "translation-linguistics",
  "heritage",
  "other",
] as const;

const SUMMARY_MIN = 50;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  affiliation: string;
  requestType: string;
  researchArea: string;
  proposalTitle: string;
  summary: string;
  attachmentUrl: string;
};

export function ResearchRequestForm() {
  const { t, locale } = useLanguage();

  // مخطط التحقق من صحة الحقول (Yup)
  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().trim().required(t("form.errName")),
        email: Yup.string()
          .trim()
          .email(t("form.errEmail"))
          .required(t("form.errEmail")),
        phone: Yup.string()
          .trim()
          .required(t("form.errPhone"))
          .test("valid-phone", t("form.errPhoneInvalid"), (v) => isValidPhone(v)),
        affiliation: Yup.string().trim(),
        requestType: Yup.string()
          .required(t("researchPage.formErrType"))
          .oneOf(REQUEST_TYPES.map((r) => r.id), t("researchPage.formErrType")),
        researchArea: Yup.string()
          .required(t("researchPage.formErrArea"))
          .oneOf([...RESEARCH_AREAS], t("researchPage.formErrArea")),
        proposalTitle: Yup.string()
          .trim()
          .required(t("researchPage.formErrProposalTitle")),
        summary: Yup.string()
          .trim()
          .min(SUMMARY_MIN, t("researchPage.formErrSummary"))
          .required(t("researchPage.formErrSummary")),
        attachmentUrl: Yup.string()
          .trim()
          .test("optional-url", t("researchPage.formErrAttachmentUrl"), (v) => {
            if (!v) return true;
            try {
              const u = new URL(v);
              return u.protocol === "http:" || u.protocol === "https:";
            } catch {
              return false;
            }
          }),
      }),
    [t],
  );

  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    affiliation: "",
    requestType: "",
    researchArea: "",
    proposalTitle: "",
    summary: "",
    attachmentUrl: "",
  };

  return (
    <div
      className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl dark:border-white/10 dark:bg-ink-900/70 sm:p-10"
      data-aos="fade-up"
    >
      {/* Form header — kicker + title + intro */}
      <div className="mb-8" lang={locale === "en" ? "en" : "ar"}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
          {t("researchPage.formKicker")}
        </p>
        <h2 className="mt-2 text-balance text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-3xl">
          {t("researchPage.formTitle")}
        </h2>
        <span className="mt-3 block h-px w-12 bg-gradient-to-r from-brand-500/70 to-transparent" />
        <p className="mt-3 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {t("researchPage.formIntro")}
        </p>
      </div>

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
                kind: "research-request",
                name: values.name,
                email: values.email,
                phone: values.phone,
                affiliation: values.affiliation,
                requestType: values.requestType,
                researchArea: values.researchArea,
                proposalTitle: values.proposalTitle,
                summary: values.summary,
                attachmentUrl: values.attachmentUrl,
              }),
            });
            if (res.status === 503) {
              toast.error(t("form.toastErrConfig"));
              return;
            }
            if (!res.ok) {
              toast.error(t("researchPage.formError"));
              return;
            }
            toast.success(t("researchPage.formSuccess"));
            resetForm();
          } catch {
            toast.error(t("researchPage.formError"));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, validateForm, values, setFieldValue, errors, touched }) => (
          <Form className="space-y-7" lang={locale === "en" ? "en" : "ar"}>
            {/* ─── Row 1: Name + Email ─── */}
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldBlock
                name="name"
                label={t("form.name")}
                autoComplete="name"
              />
              <FieldBlock
                name="email"
                label={t("form.email")}
                type="email"
                autoComplete="email"
              />
            </div>

            {/* ─── Row 2: Phone + Affiliation ─── */}
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldBlock
                name="phone"
                label={t("form.phone")}
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+20 1XX XXX XXXX"
              />
              <FieldBlock
                name="affiliation"
                label={t("researchPage.formAffiliation")}
                hint={t("researchPage.formAffiliationHint")}
              />
            </div>

            {/* ─── Request Type — Radio Cards ─── */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t("researchPage.formRequestType")}
              </label>
              <p className="mb-3 text-xs text-slate-500 dark:text-slate-500">
                {t("researchPage.formRequestTypeHint")}
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {REQUEST_TYPES.map((rt, idx) => {
                  const checked = values.requestType === rt.id;
                  return (
                    <button
                      key={rt.id}
                      type="button"
                      onClick={() => setFieldValue("requestType", rt.id)}
                      className={`group relative flex items-start gap-3 rounded-xl border p-4 text-start transition duration-300 ${
                        checked
                          ? "border-brand-500 bg-brand-500/10 shadow-md shadow-brand-500/10 dark:border-brand-400 dark:bg-brand-400/10"
                          : "border-slate-200/80 bg-white hover:border-brand-400/40 hover:bg-brand-500/5 dark:border-white/10 dark:bg-ink-950/40 dark:hover:border-brand-500/30"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition ${
                          checked
                            ? "bg-brand-500 text-white"
                            : "bg-brand-500/15 text-brand-600 dark:text-brand-400"
                        }`}
                      >
                        <i className={`fa-solid ${rt.icon}`} aria-hidden />
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-sm font-bold ${
                            checked
                              ? "text-brand-700 dark:text-brand-200"
                              : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {t(`researchPage.type${idx + 1}T`)}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                          {t(`researchPage.type${idx + 1}D`)}
                        </p>
                      </div>
                      {checked && (
                        <i
                          className="fa-solid fa-circle-check absolute end-2 top-2 text-brand-500 dark:text-brand-400"
                          aria-hidden
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              {touched.requestType && errors.requestType && (
                <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                  {errors.requestType}
                </p>
              )}
            </div>

            {/* ─── Research Area (Select) + Proposal Title ─── */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="researchArea"
                  className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("researchPage.formArea")}
                </label>
                <Field
                  as="select"
                  id="researchArea"
                  name="researchArea"
                  className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
                >
                  <option value="">
                    {t("researchPage.formAreaPlaceholder")}
                  </option>
                  {RESEARCH_AREAS.slice(0, 8).map((area, idx) => (
                    <option key={area} value={area}>
                      {t(`researchPage.area${idx + 1}T`)}
                    </option>
                  ))}
                  <option value="other">
                    {t("researchPage.formAreaOther")}
                  </option>
                </Field>
                <ErrorMessage
                  name="researchArea"
                  component="p"
                  className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
                />
              </div>
              <FieldBlock
                name="proposalTitle"
                label={t("researchPage.formProposalTitle")}
              />
            </div>

            {/* ─── Summary (textarea) ─── */}
            <div>
              <label
                htmlFor="summary"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("researchPage.formSummary")}
              </label>
              <Field
                as="textarea"
                id="summary"
                name="summary"
                rows={6}
                placeholder={t("researchPage.formSummaryHint")}
                className="w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
              <div className="mt-1 flex items-center justify-between gap-2">
                <ErrorMessage
                  name="summary"
                  component="p"
                  className="text-xs font-medium text-red-600 dark:text-red-400"
                />
                <p className="ms-auto text-xs text-slate-500 dark:text-slate-500">
                  {values.summary.length} / {SUMMARY_MIN}+
                </p>
              </div>
            </div>

            {/* ─── Optional Attachment URL ─── */}
            <FieldBlock
              name="attachmentUrl"
              label={t("researchPage.formAttachment")}
              hint={t("researchPage.formAttachmentHint")}
              type="url"
              placeholder="https://..."
            />

            {/* ─── Submit button ─── */}
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={async () => {
                const errs = await validateForm();
                if (Object.keys(errs).length > 0) {
                  toast.error(t("form.toastValidate"));
                }
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-brand-500 to-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 disabled:opacity-60 dark:text-ink-950 sm:w-auto sm:px-10"
            >
              <i className="fa-solid fa-paper-plane" aria-hidden />
              {isSubmitting
                ? t("researchPage.formSubmitting")
                : t("researchPage.formSubmit")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// =============================================================================
// مساعد: حقل إدخال موحّد بـ label + Field + ErrorMessage
// يقلّل التكرار في الفورم ويوحد النمط البصري
// =============================================================================
function FieldBlock({
  name,
  label,
  hint,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  hint?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "url" | "email" | "numeric";
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
      >
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
      />
      {hint && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">{hint}</p>
      )}
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
      />
    </div>
  );
}
