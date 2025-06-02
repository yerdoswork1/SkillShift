'use client';

import Image from "next/image"
import ContactsImage from '@/assets/contacts/contacts-section.png'
import MapPin from '@/assets/icons/contacts/map-pin.svg'
import PhoneIcon from '@/assets/icons/contacts/icon-phone-40.svg'
import WPIcon from '@/assets/icons/contacts/whatsapp-logo.svg'
import TGIcon from '@/assets/icons/contacts/telegram-logo.svg'
import MailIcon from '@/assets/icons/contacts/icon-mail.svg'
import UniversalTitle from "./UniversalTitle"
import { useTranslation } from "react-i18next"

const ContactsSection = () => {

    const { t } = useTranslation()

    return (
        <section className="flex flex-col 
                w-full 
                py-2.5
                gap-y-5 md:gap-y-10 xl:gap-y-13 2xl:gap-y-15" >
            <UniversalTitle title={t("contacts.contacts-section.title")} />
            <div className="flex flex-col md:flex-row gap-y-5 gap-x-10" >
                <div className="w-full md:w-8/12">
                    <Image src={ContactsImage} alt="contacts image" priority className="w-full h-auto object-cover rounded-lg" />
                </div>

                <nav className="w-full md:w-4/12" >
                    <ul className="flex flex-col items-start justify-start
                        gap-y-5 md:gap-y-2.5 xl:gap-y-2.5 2xl:gap-y-4 
                        text-base md:text-sm xl:text-2xl 2xl:text-3xl 
                        text-gray-900" >
                        <li>
                            <div className="flex items-center md:py-1 xl:py-3 gap-x-6">
                                <Image src={MapPin} alt="map pin" className="w-5 md:w-6 lg:w-8 xl:w-10 h-full" />
                                <span>г. Астана, Штаб квартира</span>
                            </div>
                        </li>
                        <li>
                            <a href="tel:+77008008187" className="flex items-center md:py-1 xl:py-3 gap-x-6" >
                                <Image src={PhoneIcon} alt="phone icon" className="w-5 md:w-6 lg:w-8 xl:w-10 h-full" />
                                <span>+7 700 800 81 87</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center md:py-1 xl:py-3 gap-x-6" >
                                <Image src={WPIcon} alt="whatsapp icon" className="w-5 md:w-6 lg:w-8 xl:w-10 h-full" />
                                <span>WhatsApp</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center md:py-1 xl:py-3 gap-x-6" >
                                <Image src={TGIcon} alt="telegram icon" className="w-5 md:w-6 lg:w-8 xl:w-10 h-full" />
                                <span>Telegram</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@offiwebsite.com" className="flex items-center md:py-1 xl:py-3 gap-x-6" >
                                <Image src={MailIcon} alt="mail icon" className="w-5 md:w-6 lg:w-8 xl:w-10 h-full" />
                                <span>info@offiwebsite.com</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default ContactsSection