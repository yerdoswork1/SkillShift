"use client";

import { useEffect, useState } from 'react';
import LanguageDropDown from './LanguageDropDown';
import Logo from './Logo';
import SpecializationsDropdown from './SpecializationsDropdown';
import Russ from '@/assets/icons/russia-icon-36.svg';
import Eng from '@/assets/icons/eng-icon-36.svg';
import Kaz from '@/assets/icons/kaz-icon-36.svg';
import MobileLanguageDropdown from './MobileLanguageDropDown';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const languages = [
    { src: Russ, name: 'Русский', shortName: "Рус", code: "ru" },
    { src: Eng, name: 'English', shortName: "Eng", code: "en" },
    { src: Kaz, name: 'Қазақша', shortName: "Қаз", code: "kz" }
];

export default function Header() {
    const { t, i18n } = useTranslation("common");
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const currentLangCode = i18n.language;
            const matchedLanguage = languages.find(lang => lang.code === currentLangCode);
            if (matchedLanguage) {
                setSelectedLanguage(matchedLanguage);
            }
        }
    }, [i18n.language, isClient]);

    if (!isClient || !selectedLanguage) {
        return null;
    }



    return (
        <>
            <header
                className="flex justify-between relative
        px-2.5 sm:px-0 py-7 w-full 
        text-[rgb(35,34,34)] text-base md:text-xs xl:text-xl 2xl:text-2xl font-normal shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.05)] "
            >
                <div className='relative mx-auto w-full px-2.5 sm:px-6 md:px-8 2xl:max-w-[1760px]'>
                    <div className="flex justify-between">
                        <div className='flex items-center md:gap-x-5 xl:gap-x-10 '>
                            <Logo />
                            <SpecializationsDropdown />
                            <div className='hidden md:block'>
                                <Link href="/contacts" className='hover:text-[rgb(60,58,223)]'>{t("header.contacts")}</Link>
                            </div>
                        </div>

                        <LanguageDropDown
                            isOpen={isLanguageOpen}
                            setIsOpen={setIsLanguageOpen}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                        />
                    </div>
                </div>
            </header>

            <MobileLanguageDropdown isOpen={isLanguageOpen}
                setIsOpen={setIsLanguageOpen}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage} />
        </>
    );
}
