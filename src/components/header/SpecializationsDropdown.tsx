"use client"

import Image from "next/image";
import vectorDown from '@/assets/icons/vector-down.svg';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const SpecializationsDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='hidden md:block relative' ref={dropdownRef}>

            <button
                className='cursor-pointer flex items-center md:gap-x-2.5 xl:gap-x-5 group hover:text-[rgb(60,58,223)] '
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{t('header.directions')}</span>
                <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <Image src={vectorDown} alt='vector down' />
                </div>
            </button>

            {isOpen && (
                <nav className="absolute
                    hidden md:block
                    xl:px-7 lg:px-5 md:px-3.5 xl:pb-7 lg:pb-5 md:pb-3
                    2xl:top-[64px] xl:top-[62px] lg:top-[60px] md:top-[59px] left-[30%] 
                    2xl:w-64 xl:w-[218px] lg:w-35 md:w-32
                    rounded-lg rounded-t-none bg-white drop-shadow-lg z-10"  >
                    <ul className="flex flex-col 2xl:gap-y-5 xl:gap-y-4 md:gap-y-2.5 " >
                        <li><a href="/services/professions" className="hover:text-[rgb(60,58,223)]">{t('header.professions')}</a></li>
                        <li><a href="/services/subjects" className="hover:text-[rgb(60,58,223)]">{t('header.subjects')}</a></li>
                        <li><a href="/services/languages" className="hover:text-[rgb(60,58,223)]">{t('header.languages')}</a></li>
                        <li><a href="/services/music-dance" className="hover:text-[rgb(60,58,223)]">{t('header.music-and-dance')}</a></li>

                    </ul>
                </nav>
            )}
        </div>
    );
};

export default SpecializationsDropdown;

