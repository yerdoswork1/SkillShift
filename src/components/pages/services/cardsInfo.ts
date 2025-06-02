import Professions from '@/assets/home/DirectionCarouselSection/professions-card.png'
import Subjects from '@/assets/home/DirectionCarouselSection/subjects-card.png'
import Languages from '@/assets/home/DirectionCarouselSection/languages-card.png'
import Musics from '@/assets/home/DirectionCarouselSection/musics-card.png'
import { StaticImageData } from 'next/image';

export interface IServiceCard {
    id: string;
    name: string;
    image?: StaticImageData;
    price?: number;
}

export const cards: IServiceCard[] = [
    {
        id: "professions",
        name: "professions",
        image: Professions,
        price: 30000
    },
    {
        id: "subjects",
        name: "subjects",
        image: Subjects,
        price: 8500
    },
    {
        id: "languages",
        name: "languages",
        image: Languages,
        price: 8500
    },
    {
        id: "music-dance",
        name: "music-and-dance",
        image: Musics,
        price: 8500
    }
]