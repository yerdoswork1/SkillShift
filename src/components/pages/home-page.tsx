// "use client";

import HeroSection from "./home/HeroSection";
import OpenYourPotential from "./home/OpenYourPotential";
import DirectionCarouselSection from "./home/DirectionCarouselSection";


export default function HomePage() {
    return (
        <>
            <HeroSection />

            <DirectionCarouselSection/>

            <OpenYourPotential />

        </>
    )
}