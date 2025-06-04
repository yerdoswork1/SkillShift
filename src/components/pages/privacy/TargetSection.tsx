"use client";

import { useTranslation } from "react-i18next";

export default function TargetSection() {
  const { t } = useTranslation();
  const terms = [
    { id: "4.1", value: t("privacy-page.target-section.terms.4.1") },
    { id: "4.1.1", value: t("privacy-page.target-section.terms.4.1.1") },
    { id: "4.1.2", value: t("privacy-page.target-section.terms.4.1.2") },
    { id: "4.1.3", value: t("privacy-page.target-section.terms.4.1.3") },
    { id: "4.1.4", value: t("privacy-page.target-section.terms.4.1.4") },
    { id: "4.1.5", value: t("privacy-page.target-section.terms.4.1.5") },
    { id: "4.1.6", value: t("privacy-page.target-section.terms.4.1.6") },
    { id: "4.1.7", value: t("privacy-page.target-section.terms.4.1.7") },
    { id: "4.1.8", value: t("privacy-page.target-section.terms.4.1.8") },
    { id: "4.1.9", value: t("privacy-page.target-section.terms.4.1.9") },
  ];
  return (
    <section className="mb-15">
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.target-section.title")}
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
