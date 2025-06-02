'use client';

import Logo from "./Logo";
import Info from "./Info";
import Contacts from "./Contacts";
import { useTranslation } from "react-i18next";

function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="text-black w-full m-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:max-w-[1760px] py-10 hidden md:block lg:text-xl text-md">
            <div className='flex justify-between pb-10'>
                <Logo />
                <Info />
                <Contacts />
            </div>

            <div className="flex justify-end pt-4 border-t-1 border-t-blue-600">
                <p className="lg:text-base text-sm">© Skillshift 2013-2025. {t("footer.all-rights-reserved")}.</p>
            </div>
        </footer>
    );
}

export default Footer