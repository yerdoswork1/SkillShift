"use client";

import { useTranslation } from "react-i18next";

export default function SubjectSection() {
  const { t } = useTranslation();

  const termIds = [
    "3.1",
    "3.2",
    "3.2.1",
    "3.2.2",
    "3.2.3",
    "3.3",
    "3.3.1",
    "3.3.2",
    "3.4",
  ];

  return (
    <section>
      <h2 className="mt-10 mb-10 w-[90%] pt-2 text-base font-semibold sm:text-2xl lg:text-4xl xl:text-5xl/14">
        {t("privacy-page.subject-section.title")}
      </h2>

      {termIds.map((id) => (
        <div key={id} className="flex gap-2">
          <span className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl">
            {id}.
          </span>
          <div className="flex-1">
            {id === "3.3" ? (
              <>
                <p className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl">
                  {t("privacy-page.subject-section.terms.3.3.main")}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <li
                      className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl"
                      key={item}
                    >
                      {t(
                        `privacy-page.subject-section.terms.3.3.items.${item}`,
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : id === "3.3.1" || id === "3.3.2" ? (
              <p className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl">
                {t(
                  `privacy-page.subject-section.terms.3.3.subpoints.${id.split(".")[2]}`,
                )}
              </p>
            ) : (
              <p className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl">
                {t(`privacy-page.subject-section.terms.${id}`)}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
