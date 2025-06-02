'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import UniversalTitle from "./UniversalTitle";
import { useTranslation } from "react-i18next";


const InformationSection = () => {

    const { t } = useTranslation()

    return (
        <>
            <section className="flex md:hidden flex-col 
                w-full 
                pt-2.5 pb-5
                gap-y-5 md:gap-y-10 xl:gap-y-13 2xl:gap-y-15">
                <UniversalTitle title={t("contacts.information-section.title")} />
                <div className="flex flex-col gap-y-5 items-start justify-start w-full">
                    <Link href="#" className="flex items-center gap-x-1 w-full text-base text-gray-900">{t("contacts.information-section.public-offer")} <ArrowRight className="w-4 h-4" /></Link>
                    <Link href="#" className="flex items-center gap-x-1 w-full text-base text-gray-900">{t("contacts.information-section.privacy-policy")} <ArrowRight className="w-4 h-4" /></Link>
                </div>

            </section>
        </>
    )
}

export default InformationSection;