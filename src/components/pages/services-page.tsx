'use client'


import DynamicBreadcrumb from "@/components/dynamicBreadcrumb/DynamicBreadCrumb";
import ServicesList from "./services/ServicesList";
import { cards } from "./services/cardsInfo";
import { montserrat } from "@/assets/fonts/fonts";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {

    const { t } = useTranslation()

    return (
        <section>
            <DynamicBreadcrumb />
            <h2 className={`${montserrat.className} sm:hidden mt-3 text-sm font-semibold leading-none text-gray-900`} >
                {t("services-page.breadcrumbs.services")}
            </h2>
            <ServicesList cards={cards} />
        </section>
    );
}
