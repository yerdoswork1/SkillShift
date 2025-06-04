"use client";

import { useTranslation } from "react-i18next";

export default function ResponsibilitySection() {
  const { t } = useTranslation();

  const terms = [
    { id: "7.1", value: t("privacy-page.responsibility-section.terms.7.1") },
    { id: "7.2", value: t("privacy-page.responsibility-section.terms.7.2") },
    {
      id: "7.2.1",
      value: t("privacy-page.responsibility-section.terms.7.2.1"),
    },
    {
      id: "7.2.2",
      value: t("privacy-page.responsibility-section.terms.7.2.2"),
    },
    {
      id: "7.2.3",
      value: t("privacy-page.responsibility-section.terms.7.2.3"),
    },
  ];
  return (
    <section>
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.responsibility-section.title")}
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
