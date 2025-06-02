import { StaticImageData } from "next/image";
import MusicDanceImg from "@/assets/open-your-potential.png";
import BreakdanceImg from "@/assets/services/music-dance/break-dance.png"

import ChoreographyImg from "@/assets/services/music-dance/choreography.png"
import ClassicGuitarImg from "@/assets/services/music-dance/classic-guitar.png"
import ClassicalVocals from "@/assets/services/music-dance/classical-vocals.png"
import DomraImg from "@/assets/services/music-dance/domra.png"
import DrumsImg from "@/assets/services/music-dance/drums.png"
import HipHopImg from "@/assets/services/music-dance/hip-hop.png"
import PianoImg from "@/assets/services/music-dance/piano.png"
import PopVocalsImg from "@/assets/services/music-dance/pop-vocals.png"
import ShaffleImg from "@/assets/services/music-dance/shaffle.png"
import TangoImg from "@/assets/services/music-dance/tango.png"
import ViolinImg from "@/assets/services/music-dance/violin.png"

import ProductManagerImg from "@/assets/services/professions/product-manager.png"
import JavaBackEndDeveloperImg from "@/assets/services/professions/java-back-end-developer.png"
import ReactFrontEndDeveloperImg from "@/assets/services/professions/react-front-end-developer.png"
import FlutterMobileDeveloperImg from "@/assets/services/professions/flutter-mobile-developer.png"
import UiUxDesignerImg from "@/assets/services/professions/ui-ux-designer.png"
import InteriorExteriorDesignerImg from "@/assets/services/professions/interior-exterior-designer.png"
import FashionDesignerImg from "@/assets/services/professions/fashion-designer.png"
import FurnitureDesignerImg from "@/assets/services/professions/furniture-designer.png"

import BiologyImg from "@/assets/services/subjects/biology.png"
import ChemistryImg from "@/assets/services/subjects/chemistry.png"
import GeographyImg from "@/assets/services/subjects/geography.png"
import InformaticsImg from "@/assets/services/subjects/informatics.png"
import MathImg from "@/assets/services/subjects/math.png"
import PaintingImg from "@/assets/services/subjects/painting.png"
import PhysicsImg from "@/assets/services/subjects/physics.png"
import RoboticsImg from "@/assets/services/subjects/robotics.png"

import ArabImg from "@/assets/services/languages/arab.png"
import ChineseImg from "@/assets/services/languages/chinese.png"
import EnglishImg from "@/assets/services/languages/english.png"
import KazakhImg from "@/assets/services/languages/kazakh.png"
import RussianImg from "@/assets/services/languages/russian.png"
import TurkImg from "@/assets/services/languages/turk.png"





interface Service {
    id: string,
    name: string,

    image?: StaticImageData,
    subCategory?: string,

    price?: string,
    description?: string[],
}

export
interface ServiceCategory {
    id: string,
    name: string,
    items: Service[],
    
    image?: StaticImageData,
    subCategories?: string[],
}


export
const services: ServiceCategory[] = [
    {
        id: "music-dance",
        name: "Музыка и танцы",
        subCategories: ["Музыка", "Танцы", "Вокал"],
        image: MusicDanceImg,
        items: [ // добавить остальные
            { 
                id:"piano", 
                name: "Фортепиано", 
                subCategory: "Музыка", 
                price: "30000", 
                image: PianoImg,
                description: [
                    `Вы сможете освоить классические произведения, современные хиты или даже научиться импровизировать. Мы уделяем внимание не только технике — помогаем развивать музыкальный слух и рассказывем о музыкальных основах.`,
                    `Присоединяйтесь к нашим занятиям и погружайтесь в мир музыки с удовольствием!`,
                ] 
            },
            { 
                id:"classic-guitar", 
                name: "Классическая гитара", 
                subCategory: "Музыка", 
                price: "30000", 
                image: ClassicGuitarImg,

                description: [
                    `На уроках вы познакомитесь с основами игры, техниками исполнения и музыкальной теорией. Вы научитесь играть свои любимые произведения или изучить что-то из классики. Мы поможем развить разнообразные навыки и музыкальный вкус.`, 
                    `Присоединяйтесь к нашим занятиям и откройте для себя мир музыки на классической гитаре!`
                ]
            },
            { 
                id:"violin", 
                name: "Скрипка", 
                subCategory: "Музыка", 
                price: "30000", 
                image: ViolinImg,

                description: [
                    `На уроках вы освоите основы техники игры, музыкальную теорию и различные стили исполнения. Вы изучите классические произведения, попрактикуетесь в ансамблевом исполнении, что научит взаимодействию с другими музыкантами.`,
                    `Присоединяйтесь к нашим занятиям и откройте для себя магию игры на скрипке!`
                ]
            },
            { 
                id:"drums", 
                name: "Ударные", 
                subCategory: "Музыка", 
                price: "30000", 
                image: DrumsImg,

                description: [
                    "Вы научитесь основным ритмам и техникам игры. Занятия проводятся квалифицированными преподавателями, которые помогут вам развить чувство ритма, координацию и музыкальную грамотность.",
                    "Присоединяйтесь к нам и начните свой путь в мир ударной музыки!"
                ]
            },
            { 
                id:"domra", 
                name: "Домра", 
                subCategory: "Музыка", 
                price: "30000", 
                image: DomraImg,

                description: [
                    "Вы научитесь основным техникам игры, аккордам и мелодиям, а также освоите различные стили исполнения. Опытные преподаватели помогут вам развить музыкальный слух, технику и чувство ритма.",
                    "Присоединяйтесь к нам и откройте для себя мир домровой музыки!",
                ]
            },

            { 
                id:"choreography", 
                name: "Хореография", 
                subCategory: "Танцы", 
                price: "30000", 
                image: ChoreographyImg,

                description: [
                    `Вы сможете освоить классические элементы, укрепить стопы и спину, а также подготовить основу для других направлений танца.Опытные преподаватели помогут вам развить гибкость, координацию и чувство ритма.`,
                    `Присоединяйтесь к нам и раскройте свой танцевальный потенциал!`
                ]
            },
            { 
                id:"hip-hop", 
                name: "Хип-хоп", 
                subCategory: "Танцы", 
                price: "30000", 
                image: HipHopImg,

                description: [
                    `Вы освоите основные стили хип-хопа, такие как breaking, locking и popping, а также научитесь создавать собственные хореографические комбинации.`,
                    `Присоединяйтесь к нам и дайте волю своему творчеству в танце хип-хоп!`
                ]
            },
            { 
                id:"tango", 
                name: "Танго", 
                subCategory: "Танцы", 
                price: "30000", 
                image: TangoImg,

                description: [
                    `Вы освоите основные шаги и техники, научитесь чувствовать музыку и взаимодействовать с партнером. Опытные преподаватели помогут вам развить координацию и эмоциональную выразительность.`,
                    `Присоединяйтесь к нам и откройте для себя волшебство танго!`
                ]
            },
            { 
                id:"break-dance", 
                name: "Брейкданс", 
                subCategory: "Танцы", 
                price: "30000", 
                image: BreakdanceImg,
                description: [
                    `Вы освоите основные элементы брейкданса, включая топ-рок, даун-рок, паузы и фризы, а также научитесь создавать свои собственные комбинации. Опытные преподаватели помогут вам развить силу, гибкость и координацию.`,
                    `Присоединяйтесь к нам и станьте частью захватывающего мира брейкданса!`
                ]
            },
            { 
                id:"shaffle", 
                name: "Шаффл", 
                subCategory: "Танцы", 
                price: "30000", 
                image: ShaffleImg,

                description: [
                    `Вы освоите основные шаги и техники шаффла и научитесь сочетать их с различными музыкальными стилями. Опытные преподаватели помогут вам развить чувство ритма и координацию.`,
                    `Присоединяйтесь к нам и откройте для себя увлекательный мир танца шаффл!`
                ]
            },

            { 
                id:"pop-vocals", 
                name: "Эстрадный вокал", 
                subCategory: "Вокал", 
                price: "30000", 
                image: PopVocalsImg,

                description: [
                    `Вы освоите основные техники дыхания, интонации и артикуляции, а также научитесь работать с различными музыкальными стилями. Опытные преподаватели помогут вам развить голосовые данные и музыкальный слух.`,
                    `Присоединяйтесь к нам и начните свой путь к музыкальному совершенству!`
                ]
            },
            { 
                id:"classical-vocals", 
                name: "Классический вокал", 
                subCategory: "Вокал", 
                price: "30000", 
                image: ClassicalVocals,

                description: [
                    `Вы освоите основные техники дыхания, интонации и артикуляции. Опытные преподаватели помогут вам развить голосовые данные и музыкальный слух.`,
                    `Присоединяйтесь к нам и начните свой путь к музыкальному совершенству!`
                ]
            },

        ]
    },

    {
        id: "professions",
        name: "Профессии",
        items: [
            { 
                id:"product-manager", 
                name: "Product manager", 
                price: "50000", 
                image: ProductManagerImg,

                description: [
                    `Курс сочетает теорию и практику управления цифровым продуктом на всех этапах его развития. Вы освоите анализ рынка, конкурентов и целевой аудитории с помощью digital-инструментов, а также научитесь управлять жизненным циклом продукта и эффективно координировать команду.`
                ]
            },
            { 
                id:"java-back-end-developer", 
                name: "Java back-end developer", 
                price: "50000", 
                image: JavaBackEndDeveloperImg,

                description: [
                    "Курс изучает язык программирования Java для создания серверной части сайтов и приложений. Освоите стандартные для индустрии фреймворки и библиотеки, разберетесь в классках, наследованиях и интерфейсах, изучите объектно-ориентированное программирование, работу с коллекциями, обработку исключений и многопоточность."
                ]
            },
            { 
                id:"react-front-end-developer", 
                name: "React front-end developer", 
                price: "50000", 
                image: ReactFrontEndDeveloperImg,

                description: [
                    "Курс предоставляет теоретические знания, практические навыки и современные подходы в разработке интерактивных пользовательских интерфейсов с помощью библиотеки JavaScript — React. Изучите алгоритмы структуры данных, компонентный подход в разработке для создания крупных компонентов из более мелких."
                ]
            },
            { 
                id:"flutter-mobile-developer", 
                name: "Flutter mobile developer", 
                price: "50000", 
                image: FlutterMobileDeveloperImg,

                description: [
                    "Курс предоставляет теоретические знания и практические навыки в разработке кросс-платформенных мобильных приложений с помощью фреймворка Flutter на языке программирования Draft. Научитесь создавать приложений для разных операционных систем, и веб-приложений, используя единую кодовую базу, освоите работу с базами данных."
                ]
            },
            { 
                id:"ui-ux-designer ", 
                name: "UI/UX Дизайнер ", 
                price: "50000", 
                image: UiUxDesignerImg,

                description: [
                    "Курс охватывает основы изучения опыта пользователей и их потребностей, а также проектирование понятных и удобных цифровых продуктов. Освоите все этапы дизайн-процесса и роль дизайнера на каждом из них, изучите методы исследования целевой аудитории, инструменты для проектирования и прототипирования необходимые для работы.",
                ]
            },
            { 
                id:"interior-exterior-designer", 
                name: "Дизайнер интерьера и экстерьера", 
                price: "50000", 
                image: InteriorExteriorDesignerImg,

                description: [
                    "Курс охватывает основы проектирования функциональных и эстетичных интерьеров. Вы освоите создание концептуальных эскизов, чертежей и 3D-визуализаций в 3DsMax и Revit, а также пройдёте все этапы — от разработки стилевой концепции до подбора мебели, материалов и освещения.",
                ]
            },
            { 
                id:"fashion-designer", 
                name: "Дизайнер одежды", 
                price: "50000", 
                image: FashionDesignerImg,

                description: [
                    "Курс охватывает основы и принципы создания модного дизайна и трендов в индустрии. Изучите процесс создания эскизов моделей одежды и принтов, в том числе 3D-моделирование, научитесь подбирать материалы и фурнитуру, а также изучите все этапы конструирования, пошива одежды и основы запуска производства.",
                ]
            },
            { 
                id:"furniture-designer", 
                name: "Дизайнер мебели", 
                price: "50000", 
                image: FurnitureDesignerImg,

                description: [
                    "Изучите весь процесс создания мебели — от идеи и 3D-моделирования в SketchUp до подбора материалов и выбора производственных технологий. Освойте навыки проектирования стильных и практичных предметов интерьера, опираясь на современные тенденции и специфику различных материалов.",
                ]
            },
        ]
    },

    {
        id: "subjects",
        name: "Предметы",
        items: [
            { 
                id:"biology", 
                name: "Биология", 
                price: "30000", 
                image: BiologyImg,

                description: [
                    "Курс по биологии для средней школы направлен на изучение живой природы, её закономерностей и разнообразия. Он охватывает основные разделы биологии, которые помогают учащимся понять строение, функции и взаимодействие живых организмов, а также их роль в экосистемах."
                ]
            },
            { 
                id:"chemistry", 
                name: "Химия", 
                price: "30000", 
                image: ChemistryImg,

                description: [
                    "Курс по химии для средней школы направлен на изучение веществ, их свойств, строения и превращений. Он знакомит учащихся с основными химическими понятиями, законами и процессами, а также формирует навыки проведения экспериментов и решения задач."
                ]
            },
            { 
                id:"geography", 
                name: "География", 
                price: "30000", 
                image: GeographyImg,

                description: [
                    "Курс по географии для средней школы направлен на формирование у учащихся представлений о природе, населении, хозяйстве и экологических проблемах Земли. Он охватывает общие географические закономерности и особенности отдельных регионов и стран."
                ]
            },
            { 
                id:"informatics", 
                name: "Информатика", 
                price: "30000", 
                image: InformaticsImg,

                description: [
                    "Курс по информатике фирмирует базовые знания и навыки в области информационных технологий и работы с компьютером. Он охватывает теоретические основы и практические аспекты, необходимые для понимания и использования современных технологий. "
                ]
            },
            { 
                id:"math", 
                name: "Математика", 
                price: "30000", 
                image: MathImg,

                description: [
                    "Курс по математике направлен на развитие логического мышления, умения решать задачи и применять знания в повседневной жизни. Охватывает основные разделы математики, которые формируют фундамент для дальнейшего изучения точных наук. "
                ]
            },
            { 
                id:"painting", 
                name: "Живопись", 
                price: "30000", 
                image: PaintingImg,

                description: [
                    "Курс по живописи для средней школы направлен на формирование у учащихся представлений о художественных стилях, техниках, выдающихся мастерах и их произведениях. Он охватывает основы изобразительного искусства, развитие живописи в разные эпохи, а также знакомит с культурным наследием различных стран и народов."
                ]
            },
            { 
                id:"physics", 
                name: "Физика", 
                price: "30000", 
                image: PhysicsImg,

                description: [
                    "Курс по физике для средней школы направлен на формирование у учащихся базовых знаний о физических явлениях, законах и методах их изучения. Он охватывает основные разделы физики, которые помогают понять окружающий мир и подготовиться к дальнейшему обучению."
                ]
            },
            { 
                id:"robotics", 
                name: "Робототехника", 
                price: "30000", 
                image: RoboticsImg,

                description: [
                    "Освойте создание и программирование роботов: от основ электроники и механики до разработки алгоритмов управления. Научитесь собирать функциональные модели, работать с микроконтроллерами и датчиками."
                ]
            },
        ]
    },

    {
        id: "languages",
        name: "Языки",
        items: [
            { 
                id:"arab", 
                name: "Арабский язык", 
                price: "30000", 
                image: ArabImg,

                description: [
                    "Курсы арабского языка подойдут для любого уровня — от начинающих до продвинутых. Программа охватывает грамматику, лексику, развитие навыков чтения, письма и аудирования. Вы погрузитесь в разные диалекты, познакомитесь с арабской культурой и будете обучаться в интерактивном формате."
                ]
            },

            { 
                id:"chinese", 
                name: "Китайский язык", 
                price: "30000", 
                image: ChineseImg,

                description: [
                    "На курсах китайского языка вы не только освоите базовые и грамматические структуры. Получите уникальные знания о китайской письменности, включая иероглифы. Вы научитесь читать и писать на китайском языке, что является элементом глубокого понимания культуры и истории. Освоите основы произношения и тонов, особенно важно для восприятия и передачи смысла."
                ]
            },

            { 
                id:"english", 
                name: "Английский язык", 
                price: "30000", 
                image: EnglishImg,

                description: [
                    "Курсы для людей, которые хотят свободно общаться. Вы научитесь говорить с иностранцами и носителями языка, улучшите произношение, сможете понимать речь на слух и уверенно поддерживать беседу на английском. Вы освоите основные разговорные конструкции, расширите словарный запас и преодолеете языковой барьер. На занятиях будут практические упражнения."
                ]
            },
            { 
                id:"kazakh", 
                name: "Казахский язык", 
                price: "30000", 
                image: KazakhImg,

                description: [
                    "Наши онлайн-курсы казахского языка — это возможность изучать один из древнейших и красивейших языков мира. Программа подойдёт для всех уровней — от начинающих до продвинутых. Гибкий формат обучения позволяет осваивать язык в удобное время, при этом вы погружаетесь в культуру и традиции Казахстана. Особый акцент сделан на развитие разговорных навыков."
                ]
            },
            { 
                id:"russian", 
                name: "Русский язык", 
                price: "30000", 
                image: RussianImg,

                description: [
                    "Мы предлагаем увлекательное и эффективное обучение, специально разработанное для тех, кто хочет начать изучать русский язык с нуля или улучшить свои существующие знания. Особое внимание уделяется развитию навыков устной речи. В процессе обучения вы научитесь правильно строить предложения, характерные для русского языка. "
                ]
            },
            { 
                id:"turk", 
                name: "Турецкий язык", 
                price: "30000", 
                image: TurkImg,

                description: [
                    "Курсы для тех, кто хочет свободно общаться на турецком языке! Вы научитесь вести разговоры с носителями языка, улучшите произношение, будете легко воспринимать речь на слух и уверенно поддерживать беседу. В процессе обучения вы научитесь правильно строить предложения, идиомы, характерные для турецкого языка. Освоите основы произношения и тонов."
                ]
            },
        ]
    },
]