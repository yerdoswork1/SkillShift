'use client';

import { useEffect, useState } from 'react';
import Russ from '@/assets/icons/russia-icon-36.svg';
import Eng from '@/assets/icons/eng-icon-36.svg';
import Kaz from '@/assets/icons/kaz-icon-36.svg';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';


const languages = [
    { src: Russ, name: 'Русский', shortName: 'Рус', code: 'ru' },
    { src: Eng, name: 'English', shortName: 'Eng', code: 'en' },
    { src: Kaz, name: 'Қазақша', shortName: 'Қаз', code: 'kz' }
];

interface MobileLanguageDropdownProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    selectedLanguage: typeof languages[number];
    setSelectedLanguage: (lang: typeof languages[number]) => void;
}

const MobileLanguageDropdown = ({
    selectedLanguage,
    setSelectedLanguage,
    isOpen,
    setIsOpen
}: MobileLanguageDropdownProps) => {
    const [tempLanguage, setTempLanguage] = useState(selectedLanguage);
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const currentLangCode = i18n.language;
        const matchedLanguage = languages.find(lang => lang.code === currentLangCode);

        if (matchedLanguage) {
            setTempLanguage(matchedLanguage);
        }
    }, [i18n.language, setSelectedLanguage]);

    if (!isOpen) return null;

    return (
        <div
            className=" max-w-3xl flex flex-col md:hidden w-full rounded-2xl rounded-t-none bg-white shadow-2xl
                px-2.5 pt-1.5 pb-5 gap-y-2.5"

        >
            <div className="flex justify-between w-full gap-x-2">
                {languages.map((lang) => (
                    <Button
                        key={lang.code}
                        variant={tempLanguage.code === lang.code ? "default" : "outline"}
                        onClick={() => setTempLanguage(lang)}
                        className={cn(
                            "text-lg sm:text-xl py-1.5 flex-1",
                            tempLanguage.code === lang.code
                                ? "bg-indigo-700 text-white border-transparent"
                                : "border-[rgb(196,195,195)]"
                        )}
                    >
                        {lang.shortName}
                    </Button>

                ))}
            </div>
            <Button
                variant="outline"
                onClick={() => {
                    i18n.changeLanguage(tempLanguage.code);
                    setSelectedLanguage(tempLanguage);
                    setIsOpen(false);
                }}
                className="w-full text-lg py-2.5 border-[rgb(196,195,195)]"
            >
                {t('header.save')}
            </Button>
        </div>
    );
};

export default MobileLanguageDropdown;
