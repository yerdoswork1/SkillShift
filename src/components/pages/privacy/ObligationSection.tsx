"use client";

import { useTranslation } from "react-i18next";

export default function ObligationSection() {
  const { t } = useTranslation();

  const terms = [
    { id: "6.1", value: t("privacy-page.obligation-section.terms.6.1") },
    { id: "6.1.1", value: t("privacy-page.obligation-section.terms.6.1.1") },
    { id: "6.1.2", value: t("privacy-page.obligation-section.terms.6.1.2") },
    { id: "6.2", value: t("privacy-page.obligation-section.terms.6.2") },
    { id: "6.2.1", value: t("privacy-page.obligation-section.terms.6.2.1") },
    { id: "6.2.2", value: t("privacy-page.obligation-section.terms.6.2.2") },
    { id: "6.2.3", value: t("privacy-page.obligation-section.terms.6.2.3") },
    { id: "6.2.4", value: t("privacy-page.obligation-section.terms.6.2.4") },
  ];

  return (
    <section>
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.obligation-section.title")}
      </h2>
      {terms.map((term) => (
        <p
          className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl"
          key={term.id}
        >
          {term.id} {term.value}
        </p>
      ))}
    </section>
  );
}
