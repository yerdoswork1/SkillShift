'use client'

import Image from "next/image";
import heroSectionImg from "@/assets/open-your-potential.png";
import { useTranslation } from "react-i18next";

export default function OpenYourPotential() {

    const { t } = useTranslation();

    return (
        <div className="w-[95%] flex justify-start gap-2 sm:gap-6 lg:gap-12 py-12 ">

            <div className="md:w-[40%] md:max-w-6xl sm:w-[30%] sm:min-w-66 min-w-36 w-[30%] max-w-64 h-full flex justify-start items-start">
                <Image src={heroSectionImg} alt="Изучите китайский язык в легкости" className="md:w-full object-cover" />
            </div>

            <div className="md:w-[60%] sm:w-[70%] flex flex-col md:gap-4 sm:gap-2 gap-1 items-start justify-between">
                <div className=" gap-16">
                    <h2 className="xl:text-4xl/12 lg:text-2xl sm:text-xl text-[0.6rem] md:leading-8 sm:leading-6 leading-3 font-semibold md:w-[80%]">
                        {t('home-page.open-your-potential.title')}
                    </h2>

                    <p className="xl:text-2xl lg:text-lg sm:text-xs text-[0.4rem] mt-1 md:mt-4">
                        {t('home-page.open-your-potential.subtitle')}
                    </p>
                </div>

                <button className="xl:text-4xl lg:text-xl sm:text-xs text-[0.5rem] justify-self-stretch text-white bg-blue-700 rounded-lg xl:rounded-2xl sm:px-6 px-2 sm:py-2 xl:py-6 xl:px-8 xl:mb-6 py-1 cursor-pointer hover:bg-blue-800 active:bg-blue-900">
                    {t('home-page.open-your-potential.whatsapp')}
                </button>
            </div>

        </div>
    );
}