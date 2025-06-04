import Link from "next/link";
import Image from "next/image";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import telegramIcon from "@/assets/icons/telegram.svg";
import emailIcon from "@/assets/icons/email.svg";
import whatsappIconHover from "@/assets/icons/contacts/whatsapp-logo.svg";
import telegramIconHover from "@/assets/icons/contacts/telegram-logo.svg";
import emailIconHover from "@/assets/icons/contacts/icon-mail.svg";

function Messengers() {
  return (
    <div className="flex gap-2">
        <Link href="/" className="relative lg:w-9 w-7 h-7 group">
            <Image src={whatsappIcon} alt="WhatsApp icon" className=" group-hover:invisible absolute rounded-md" />
            <Image src={whatsappIconHover} alt="WhatsApp icon" className="invisible group-hover:visible hover:block absolute rounded-md" />
        </Link>

        <Link href="/" className="relative lg:w-9 w-7 h-7 group">
            <Image src={telegramIcon} alt="WhatsApp icon" className=" group-hover:invisible absolute rounded-md" />
            <Image src={telegramIconHover} alt="WhatsApp icon" className="invisible group-hover:visible hover:block absolute rounded-md" />
        </Link>

        <Link href="/" className="relative lg:w-9 w-7 h-7 group">
            <Image src={emailIcon} alt="WhatsApp icon" className=" group-hover:invisible absolute rounded-md" />
            <Image src={emailIconHover} alt="WhatsApp icon" className="invisible group-hover:visible hover:block absolute rounded-md" />
        </Link>
    </div>
  )
}

export default Messengers
