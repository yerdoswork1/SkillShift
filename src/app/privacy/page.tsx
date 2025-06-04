"use client";

import AdditionSection from "@/components/pages/privacy/AdditioSection";
import ConditionSection from "@/components/pages/privacy/ConditionSection";
import DisputeSection from "@/components/pages/privacy/DisputeSection";
import ObligationSection from "@/components/pages/privacy/ObligationSection";
import ResponsibilitySection from "@/components/pages/privacy/ResponsibilitySection";
import SubjectSection from "@/components/pages/privacy/SubjectSection";
import TargetSection from "@/components/pages/privacy/TargetSection";
import TerminSection from "@/components/pages/privacy/TerminsSection";
import WaySection from "@/components/pages/privacy/WaySection";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="mt-5 mb-13.5 font-bold lg:text-[48px] lg:leading-[120%] lg:font-bold">
        {t("privacy-page.title")}
      </h1>
      <p className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl">
        {t("privacy-page.date")}
      </p>
      <p className="mt-1 text-[0.4rem] sm:text-xs md:mt-4 lg:text-lg xl:text-2xl">
        {t("privacy-page.description")}
      </p>

      <TerminSection />

      <ConditionSection />

      <SubjectSection />

      <TargetSection />

      <WaySection />

      <ObligationSection />

      <ResponsibilitySection />

      <DisputeSection />

      <AdditionSection />

      <p className="mt-9 mb-20 text-[0.4rem] sm:text-xs lg:text-lg xl:text-2xl">
        {t("privacy-page.updated")}
      </p>
    </>
  );
}
