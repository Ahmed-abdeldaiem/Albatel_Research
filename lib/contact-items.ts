export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
};

export function buildContactItems(t: (key: string) => string): ContactItem[] {
  return [
    {
      label: t("contact.email"),
      value: "info@albatel-research.org",
      href: "mailto:info@albatel-research.org",
      icon: "fa-envelope",
    },
    {
      label: t("contact.website"),
      value: "www.albatel-research.org",
      href: "https://www.albatel-research.org",
      icon: "fa-globe",
      external: true,
    },
    {
      label: t("contact.phone"),
      value: "+20 111 117 4241",
      href: "tel:+201111174241",
      icon: "fa-phone",
    },
    {
      label: t("contact.address"),
      value: t("contact.addressVal"),
      href: "https://maps.google.com/?q=84+Tariq+Al+Hurriya+Bab+Sharqi+Alexandria+Egypt",
      icon: "fa-location-dot",
      external: true,
    },
  ];
}
