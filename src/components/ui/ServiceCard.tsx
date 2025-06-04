import LinkToIcon from "@/assets/icons/link-to-icon.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

interface Props {
    name: string,
    image?: StaticImageData,
    url?: string,
    price?: string,
}

export default function ServiceCard({name, image, price, url}: Props) {
    const {t} = useTranslation("common");
    const priceFormatted = price && new Intl.NumberFormat("ru-RU").format(Number(price)); // форматировать прайс

    return (
        <Link href={url ?? ""} className="block min-w-[100px] basis-[48%] sm:basis-[31%] h-max bg-white rounded-2xl p-2.5 md:p-3.5 lg:p-4 xl:p-6.5 2xl:p-8  shadow-[0px_4px_10px_0px_rgba(0,_0,_0,_0.06)] hover:shadow-[0px_6px_12px_0px_rgba(0,_0,_0,_0.10)]" >
            {/* картинка */}
            <div className="w-full aspect-[3/2]">
                {
                    image && (<Image
                                className="w-full h-full object-cover rounded-xl"
                                src={image}
                                alt={name}
                                priority
                            />
                    )
                }
            </div>

            {/* название */}
                {/* меньше 2xl */}
            <p className="2xl:hidden mt-2.5 md:mt-4 xl:mt-5 2xl:mt-9 text-xs sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl sm:font-semibold">
                {name.length > 17 ? name.slice(0, 16) + "..." : name}
            </p>
                {/* больше 2xl */}
            <p className="hidden 2xl:block 2xl:mt-9 2xl:text-[1.79rem] sm:font-semibold">
                {name.length > 23 ? name.slice(0, 22) + "..." : name}
            </p>


            {/* прайс и иконка стрелки */}
            <div className="mt-1 sm:mt-1.5 w-full flex items-center justify-between md:justify-between">
                <p className={`text-[0.6rem] md:text-base lg:text-xl xl:text-2xl font-normal`}  >
                    {price ? `${t(`home-page.direction-carousel-section.from`)} ${priceFormatted} ₸ ${t(`services.per-month`)}` : ""}
                </p>
                
                <Image
                    className="w-6 md:w-7 xl:w-9 2xl:w-16 hover:rotate-45 transition-transform duration-300"
                    src={LinkToIcon}
                    alt="link to"
                />
            </div>
        </Link>
        
    );
}
