import Link from "next/link";
import Image from "next/image";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import telegramIcon from "@/assets/icons/telegram.svg";
import emailIcon from "@/assets/icons/email.svg";

function Messengers() {
  return (
    <div className="flex gap-2">
        <Link href="/" >
            <Image src={whatsappIcon} alt="WhatsApp icon" className="lg:w-9 w-7" />
        </Link>

        <Link href="/" >
            <Image src={telegramIcon} alt="WhatsApp icon" className="lg:w-9 w-7" />
        </Link>

        <Link href="/" >
            <Image src={emailIcon} alt="WhatsApp icon" className="lg:w-9 w-7" />
        </Link>
    </div>
  )
}

export default Messengers
