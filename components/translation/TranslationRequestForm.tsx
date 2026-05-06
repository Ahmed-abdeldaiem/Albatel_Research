"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMemo } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useLanguage } from "@/contexts/LanguageContext";
import { isValidPhone } from "@/lib/phone";

// =============================================================================
// نموذج طلب الترجمة — يُرسل بيانات الطلب إلى /api/send-mail (kind: translation-request)
// =============================================================================

const SERVICE_TYPES = [
  { id: "full", icon: "fa-language" },
  { id: "proofread", icon: "fa-magnifying-glass" },
  { id: "localization", icon: "fa-globe" },
  { id: "consultation", icon: "fa-comments" },
  { id: "partnership", icon: "fa-handshake" },
] as const;

const DOMAINS = [
  "academic",
  "legal",
  "economic",
  "literary",
  "islamic",
  "medical",
  "technical",
  "general",
  "other",
] as const;

const LANGUAGES = ["ar", "en", "fr", "es", "de", "tr", "other"] as const;

const DESCRIPTION_MIN = 50;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  affiliation: string;
  serviceType: string;
  domain: string;
  sourceLang: string;
  targetLang: string;
  docTitle: string;
  description: string;
  wordCount: string;
  attachmentUrl: string;
};

export function TranslationRequestForm() {
  const { t, locale } = useLanguage();

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
        serviceType: Yup.string()
          .required(t("translationPage.formErrType"))
          .oneOf(
            SERVICE_TYPES.map((s) => s.id),
            t("translationPage.formErrType"),
          ),
        domain: Yup.string()
          .required(t("translationPage.formErrDomain"))
          .oneOf([...DOMAINS], t("translationPage.formErrDomain")),
        sourceLang: Yup.string()
          .required(t("translationPage.formErrSourceLang"))
          .oneOf([...LANGUAGES], t("translationPage.formErrSourceLang")),
        targetLang: Yup.string()
          .required(t("translationPage.formErrTargetLang"))
          .oneOf([...LANGUAGES], t("translationPage.formErrTargetLang"))
          .test(
            "different-from-source",
            t("translationPage.formErrSameLang"),
            function (v) {
              return !v || v !== this.parent.sourceLang;
            },
          ),
        docTitle: Yup.string()
          .trim()
          .required(t("translationPage.formErrDocTitle")),
        description: Yup.string()
          .trim()
          .min(DESCRIPTION_MIN, t("translationPage.formErrDescription"))
          .required(t("translationPage.formErrDescription")),
        wordCount: Yup.string().trim(),
        attachmentUrl: Yup.string()
          .trim()
          .test("optional-url", t("translationPage.formErrAttachmentUrl"), (v) => {
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
    serviceType: "",
    domain: "",
    sourceLang: "",
    targetLang: "",
    docTitle: "",
    description: "",
    wordCount: "",
    attachmentUrl: "",
  };

  // قائمة اللغات بترتيب ثابت — تُستخدم في القائمتين المنسدلتين
  const langOptions = LANGUAGES.map((code) => ({
    code,
    label: t(`translationPage.lang${code.charAt(0).toUpperCase()}${code.slice(1)}`),
  }));

  return (
    <div
      className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl dark:border-white/10 dark:bg-ink-900/70 sm:p-10"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="mb-8" lang={locale === "en" ? "en" : "ar"}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400">
          {t("translationPage.formKicker")}
        </p>
        <h2 className="mt-2 text-balance text-2xl font-bold leading-tight text-slate-900 dark:text-white sm:text-3xl">
          {t("translationPage.formTitle")}
        </h2>
        <span className="mt-3 block h-px w-12 bg-gradient-to-r from-brand-500/70 to-transparent" />
        <p className="mt-3 text-balance text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {t("translationPage.formIntro")}
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
                kind: "translation-request",
                ...values,
              }),
            });
            if (res.status === 503) {
              toast.error(t("form.toastErrConfig"));
              return;
            }
            if (!res.ok) {
              toast.error(t("translationPage.formError"));
              return;
            }
            toast.success(t("translationPage.formSuccess"));
            resetForm();
          } catch {
            toast.error(t("translationPage.formError"));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, validateForm, values, setFieldValue, errors, touched }) => (
          <Form className="space-y-7" lang={locale === "en" ? "en" : "ar"}>
            {/* ─── Row 1: Name + Email ─── */}
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldBlock name="name" label={t("form.name")} autoComplete="name" />
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
                label={t("translationPage.formAffiliation")}
                hint={t("translationPage.formAffiliationHint")}
              />
            </div>

            {/* ─── Service Type — Radio Cards ─── */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t("translationPage.formServiceType")}
              </label>
              <p className="mb-3 text-xs text-slate-500 dark:text-slate-500">
                {t("translationPage.formServiceTypeHint")}
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICE_TYPES.map((st, idx) => {
                  const checked = values.serviceType === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setFieldValue("serviceType", st.id)}
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
                        <i className={`fa-solid ${st.icon}`} aria-hidden />
                      </span>
                      <div className="flex-1">
                        <p
                          className={`text-sm font-bold ${
                            checked
                              ? "text-brand-700 dark:text-brand-200"
                              : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {t(`translationPage.type${idx + 1}T`)}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
                          {t(`translationPage.type${idx + 1}D`)}
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
              {touched.serviceType && errors.serviceType && (
                <p className="mt-2 text-xs font-medium text-red-600 dark:text-red-400">
                  {errors.serviceType}
                </p>
              )}
            </div>

            {/* ─── Domain + Doc Title ─── */}
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectBlock
                name="domain"
                label={t("translationPage.formDomain")}
                placeholder={t("translationPage.formDomainPlaceholder")}
              >
                {DOMAINS.slice(0, 8).map((d, idx) => (
                  <option key={d} value={d}>
                    {t(`translationPage.area${idx + 1}T`)}
                  </option>
                ))}
                <option value="other">
                  {t("translationPage.formDomainOther")}
                </option>
              </SelectBlock>
              <FieldBlock
                name="docTitle"
                label={t("translationPage.formDocTitle")}
              />
            </div>

            {/* ─── Source Language ↔ Target Language ─── */}
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectBlock
                name="sourceLang"
                label={t("translationPage.formSourceLang")}
                placeholder={t("translationPage.formLangPlaceholder")}
              >
                {langOptions.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </SelectBlock>
              <SelectBlock
                name="targetLang"
                label={t("translationPage.formTargetLang")}
                placeholder={t("translationPage.formLangPlaceholder")}
              >
                {langOptions.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </SelectBlock>
            </div>

            {/* ─── Word count (optional) ─── */}
            <FieldBlock
              name="wordCount"
              label={t("translationPage.formWordCount")}
              hint={t("translationPage.formWordCountHint")}
              type="text"
              inputMode="numeric"
              placeholder="3500"
            />

            {/* ─── Description (textarea) ─── */}
            <div>
              <label
                htmlFor="description"
                className="mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {t("translationPage.formDescription")}
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows={6}
                placeholder={t("translationPage.formDescriptionHint")}
                className="w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
              />
              <div className="mt-1 flex items-center justify-between gap-2">
                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-xs font-medium text-red-600 dark:text-red-400"
                />
                <p className="ms-auto text-xs text-slate-500 dark:text-slate-500">
                  {values.description.length} / {DESCRIPTION_MIN}+
                </p>
              </div>
            </div>

            {/* ─── Optional Attachment URL ─── */}
            <FieldBlock
              name="attachmentUrl"
              label={t("translationPage.formAttachment")}
              hint={t("translationPage.formAttachmentHint")}
              type="url"
              placeholder="https://..."
            />

            {/* ─── Submit ─── */}
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
                ? t("translationPage.formSubmitting")
                : t("translationPage.formSubmit")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

// =============================================================================
// مساعدات: حقل إدخال موحّد (FieldBlock) + قائمة منسدلة موحّدة (SelectBlock)
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

function SelectBlock({
  name,
  label,
  placeholder,
  children,
}: {
  name: string;
  label: string;
  placeholder: string;
  children: React.ReactNode;
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
        as="select"
        id={name}
        name={name}
        className="w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-900 shadow-inner outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-950 dark:text-white"
      >
        <option value="">{placeholder}</option>
        {children}
      </Field>
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-xs font-medium text-red-600 dark:text-red-400"
      />
    </div>
  );
}
