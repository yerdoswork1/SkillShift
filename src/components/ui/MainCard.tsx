'use client'

import Image from "next/image";
import LinkToIconComponent from "@/components/ui/LinkToIconComponent";
import { IServiceCard } from "@/components/pages/services/cardsInfo";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface IMainCardProps extends IServiceCard {
    className?: string;
}

const MainCard: React.FC<IMainCardProps> = ({ id, name, image, price, className }) => {

    const { t } = useTranslation()

    return (
        <div
            className={`
                ${className}
                bg-white rounded-2xl 
                p-2.5 md:p-5 xl:p-8 
                shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.06)]
                hover:shadow-[0px_6px_12px_0px_rgba(0,_0,_0,_0.10)]`}
        >
            <Link href={`services/${id}`} >
                {image && <Image src={image} alt={name} className="w-full" priority />}
            </Link>
            <div>
                <p className="
                mt-2.5 md:mt-4 xl:mt-5 2xl:mt-9 
                text-xs md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                font-normal">
                    {t(`home-page.direction-carousel-section.${name}`)}
                </p>
            </div>
            <div className="mt-1.5 w-full flex justify-between md:justify-start md:flex-row-reverse">
                {price && (
                    <p className="text-xs font-normal md:hidden">
                        {t(`home-page.direction-carousel-section.from`)} {new Intl.NumberFormat('ru-RU').format(price)} ₸
                    </p>
                )}
                <LinkToIconComponent href={`services/${id}`} />
            </div>
        </div>
    );
}

export default MainCard