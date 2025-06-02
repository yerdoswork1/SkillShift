import OurBranchesImgae from '@/assets/contacts/ourfilial-section.png'
import Image from "next/image";
import UniversalTitle from "./UniversalTitle";

const OurBrancesSection = () => {
    return (
        <section className="flex flex-col 
                w-full 
                py-2.5
                gap-y-5 md:gap-y-10 xl:gap-y-13 2xl:gap-y-15">
                <UniversalTitle title="Наши филиалы" />
            <div className="w-full" >
                <Image src={OurBranchesImgae} alt="our branches" className="w-full" />
            </div>

        </section>
    )
}

export default OurBrancesSection;