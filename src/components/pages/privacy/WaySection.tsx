"use client";

import { useTranslation } from "react-i18next";

export default function WaySection() {
  const { t } = useTranslation();
  const terms = [
    { id: "5.1", value: t("privacy-page.way-section.terms.5.1") },
    { id: "5.2", value: t("privacy-page.way-section.terms.5.2") },
    { id: "5.3", value: t("privacy-page.way-section.terms.5.3") },
    { id: "5.4", value: t("privacy-page.way-section.terms.5.4") },
    { id: "5.5", value: t("privacy-page.way-section.terms.5.5") },
    { id: "5.6", value: t("privacy-page.way-section.terms.5.6") },
  ];
  return (
    <section className="mb-15">
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.way-section.title")}
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
