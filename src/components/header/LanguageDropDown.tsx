"use client";

import Image from "next/image";
import Russ from '@/assets/icons/russia-icon-36.svg';
import Eng from '@/assets/icons/eng-icon-36.svg';
import Kaz from '@/assets/icons/kaz-icon-36.svg';
import vectorDown from '@/assets/icons/vector-down.svg';
import { useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const languages = [
    { src: Russ, name: 'Русский', shortName: "Рус", code: "ru" },
    { src: Eng, name: 'English', shortName: "Eng", code: "en" },
    { src: Kaz, name: 'Қазақша', shortName: "Қаз", code: "kz" }
];

interface LanguageDropDownProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    selectedLanguage: typeof languages[number];
    setSelectedLanguage: (lang: typeof languages[number]) => void;
};

const LanguageDropDown: React.FC<LanguageDropDownProps> = ({ isOpen, setIsOpen, selectedLanguage, setSelectedLanguage }) => {
    const { i18n } = useTranslation();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentLangCode = i18n.language;
        const matchedLanguage = languages.find(lang => lang.code === currentLangCode);

        if (matchedLanguage) {
            setSelectedLanguage(matchedLanguage);
        }
    }, [i18n.language, setSelectedLanguage]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            if (window.innerWidth < 768) return;

            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setIsOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [setIsOpen]);

    return (
        <div className="relative flex items-center" ref={dropdownRef}>
            <button
                className="flex items-center gap-x-2.5 hover:text-[#3C3ADF] transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <div className='w-6 2xl:w-10 h-6 flex items-center justify-center'>
                    <Image
                        src={selectedLanguage.src}
                        alt={`${selectedLanguage.name} language`}
                        className="object-contain"
                    />
                </div>
                <span className="hidden md:inline xl:mr-7 2xl:mr-0 ">{selectedLanguage.name}</span>
                <span className="md:hidden">{selectedLanguage.shortName}</span>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <Image
                        src={vectorDown}
                        alt={isOpen ? 'Свернуть меню' : 'Развернуть меню'}
                    />
                </div>
            </button>

            {isOpen && (
                <nav className="absolute hidden md:block
                        2xl:top-[64px] xl:top-[62px] lg:top-[60px] md:top-[59px] right-0.5
                        2xl:w-64 xl:w-46 lg:w-35 md:w-32
                        rounded-lg rounded-t-none bg-white shadow-[0px_8px_24px_0px_rgba(0,_0,_0,_0.10)] z-10"
                >
                    <ul className="flex flex-col">
                        {languages.map((language) => (
                            <li key={language.code}>
                                <button
                                    className={`w-full flex items-center gap-3 px-4 py-2  hover:text-[#3C3ADF] transition-colors ${selectedLanguage.code === language.code ? 'text-[#3C3ADF] font-medium' : ''
                                        }`}
                                    onClick={() => {
                                        i18n.changeLanguage(language.code);
                                        setSelectedLanguage(language);
                                        setIsOpen(false);
                                    }}
                                    role="menuitem"
                                >
                                    <Image
                                        src={language.src}
                                        alt="language"
                                        className="flex-shrink-0 w-4.5 md:w-6 2xl:w-10"
                                    />
                                    <span>{language.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default LanguageDropDown;
