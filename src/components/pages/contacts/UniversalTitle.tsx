import { montserrat } from "@/assets/fonts/fonts";

interface UniversalTitleProps {
    title?: string;
}

const UniversalTitle: React.FC<UniversalTitleProps> = ({ title }) => {
    return (
        <h2 className={`${montserrat.className} text-sm md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900`} >{title}</h2>
    )
}

export default UniversalTitle;
