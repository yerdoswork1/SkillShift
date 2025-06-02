'use client'

import OurBranchesImgae from '@/assets/contacts/ourfilial-section.png'
import Image from "next/image";
import UniversalTitle from "./UniversalTitle";
import { useTranslation } from 'react-i18next';

const OurBrancesSection = () => {

    const { t } = useTranslation()

    return (
        <section className="flex flex-col 
                w-full 
                py-2.5
                gap-y-5 md:gap-y-10 xl:gap-y-13 2xl:gap-y-15">
                <UniversalTitle title={t("contacts.our-brances-section.title")} />
            <div className="w-full" >
                <Image src={OurBranchesImgae} alt="our branches" className="w-full" />
            </div>

        </section>
    )
}

export default OurBrancesSection;