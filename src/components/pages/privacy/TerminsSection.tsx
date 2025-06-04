"use client";

import { useTranslation } from "react-i18next";

export default function TerminSection() {
  const { t } = useTranslation();

  const terms = [
    { id: "1.1", value: t("privacy-page.terminology-section.terms.1.1") },
    { id: "1.1.1", value: t("privacy-page.terminology-section.terms.1.1.1") },
    { id: "1.1.2", value: t("privacy-page.terminology-section.terms.1.1.2") },
    { id: "1.1.3", value: t("privacy-page.terminology-section.terms.1.1.3") },
    { id: "1.1.4", value: t("privacy-page.terminology-section.terms.1.1.4") },
    { id: "1.1.5", value: t("privacy-page.terminology-section.terms.1.1.5") },
    { id: "1.1.6", value: t("privacy-page.terminology-section.terms.1.1.6") },
    { id: "1.1.7", value: t("privacy-page.terminology-section.terms.1.1.7") },
  ];

  return (
    <section>
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.terminology-section.title")}
      </h2>
      {terms.map((term) => (
        <p
          key={term.id}
          className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl"
        >
          {term.id} {term.value}
        </p>
      ))}
    </section>
  );
}
