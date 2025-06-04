"use client";

import { useTranslation } from "react-i18next";

export default function ConditionSection() {
  const { t } = useTranslation();

  const terms = [
    { id: "2.1", value: t("privacy-page.conditions-sections.terms.2.1") },
    { id: "2.2", value: t("privacy-page.conditions-sections.terms.2.2") },
    { id: "2.3", value: t("privacy-page.conditions-sections.terms.2.3") },
    { id: "2.4", value: t("privacy-page.conditions-sections.terms.2.4") },
  ];

  return (
    <section>
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.conditions-sections.title")}
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
