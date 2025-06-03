'use client'

import { montserrat } from "@/assets/fonts/fonts"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cards } from "@/components/pages/services/cardsInfo"
import MainCard from "@/components/ui/MainCard"
import Link from "next/link"
import { useTranslation } from "react-i18next"

const DirectionCarouselSection = () => {

    const { t } = useTranslation()

    return (
        <section className={`${montserrat.className} flex flex-col lg:space-y-14 mt-14 items-start w-full`}>
            <div className="flex justify-between w-full">
                <h3 className="font-semibold tex-xs md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl">{t("home-page.direction-carousel-section.directions")}</h3>
                <Link href={"/services"} className="text-indigo-700 text-[0.68rem] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:underline">{t("home-page.direction-carousel-section.see-all")}</Link>
            </div>

            <div className="mt-5 md:mt-10 2xl:mt-14 w-full overflow-hidden ">
                <Carousel
                    plugins={[Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })]}
                    opts={{
                        align: "start",
                        loop: true,
                        slidesToScroll: 1,
                    }}
                >
                    <CarouselContent className="flex w-full snap-x snap-mandatory -ml-1.25 md:-ml-2.5 xl:-ml-3.5">
                        {cards.map(card => (
                            <CarouselItem
                                key={card.id}
                                className="flex basis-[50%] md:basis-[33.333%] snap-start pl-2.5 md:pl-5 xl:pl-7"
                            >
                                <MainCard
                                    id={card.id}
                                    name={card.name}
                                    image={card.image}
                                    price={card.price}
                                    className="w-full mb-4 mt-1.5"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}

export default DirectionCarouselSection
