import { ArrowRight } from "lucide-react";
import Link from "next/link";
import UniversalTitle from "./UniversalTitle";


const InformationSection = () => {

    return (
        <>
            <section className="flex md:hidden flex-col 
                w-full 
                pt-2.5 pb-5
                gap-y-5 md:gap-y-10 xl:gap-y-13 2xl:gap-y-15">
                <UniversalTitle title="Информация" />
                <div className="flex flex-col gap-y-5 items-start justify-start w-full">
                    <Link href="#" className="flex items-center gap-x-1 w-full text-base text-gray-900">Публичная оферта <ArrowRight className="w-4 h-4" /></Link>
                    <Link href="#" className="flex items-center gap-x-1 w-full text-base text-gray-900">Политика конфиденциальности <ArrowRight className="w-4 h-4" /></Link>
                </div>

            </section>
        </>
    )
}

export default InformationSection;