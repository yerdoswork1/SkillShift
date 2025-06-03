'use client';

import Image from "next/image";
import heroSectionImg from "@/assets/hero-section-img.png";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className="w-full aspect-3/1 flex justify-between items-center my-6 lg:pl-12 md:pl-7 sm:pl-4 pl-2 py-4 rounded-2xl shadow-[0_8px_20px_#00000010]">
            <div className="w-[50%] flex flex-col md:gap-4 gap-2 pl-2 items-start">
                <h2 className="xl:text-5xl/14 lg:text-4xl sm:text-2xl text-base pt-2 text-blue-700 font-semibold w-[90%]">
                    {t('home-page.hero-section.title')}
                    <span className="text-black">{t('home-page.hero-section.in-ease')}</span>
                </h2>

                <p className="xl:text-2xl lg:text-xl sm:text-base text-[0.6rem]">{t('home-page.hero-section.subtitle')}</p>

                <button className="xl:text-2xl lg:text-xl sm:text-base text-[0.7rem] text-white bg-blue-700 rounded-lg sm:px-6 px-2 sm:py-2 py-1 mt-4 cursor-pointer hover:bg-blue-800 active:bg-blue-900">
                    {t('home-page.hero-section.whatsapp')}
                </button>
            </div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <Image
                    src={heroSectionImg}
                    alt="Изучите китайский язык в легкости"
                    className="md:w-[70%]"
                    priority
                />
            </div>
        </div>
    );
}