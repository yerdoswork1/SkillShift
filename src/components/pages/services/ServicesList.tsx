
import { montserrat } from "@/assets/fonts/fonts";
import { IServiceCard } from "./cardsInfo";
import MainCard from "@/components/ui/MainCard";

interface ServicesListProps {
    cards: IServiceCard[]
}

const ServicesList: React.FC<ServicesListProps> = ({ cards }) => {
    return (
        <div
            className={`${montserrat.className}  
                    w-full 
                    grid grid-cols-2 md:grid-cols-3 
                    gap-x-2.5 md:gap-x-5 xl:gap-x-7 
                    gap-y-5 xl:gap-y-10 2xl:gap-y-15 
                    mt-10`}
        >
            {cards.map((card) => (
                <MainCard key={card.id} {...card} />
            ))}
        </div>
    )
}

export default ServicesList