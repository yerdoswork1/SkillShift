import { lato, montserrat } from "@/assets/fonts/fonts";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={`${montserrat.className} relative  w-screen h-screen flex justify-center items-center`} >
            <div className="inline-flex flex-col space-y-10 items-center justify-start" >
                <p className="text-4xl md:text-[4rem] font-semibold text-center text-indigo-700" >404</p>
                <div className="flex flex-col space-y-5 items-center justify-start" >
                    <p className="text-xl md:text-4xl font-semibold text-center">Страница не найдена</p>
                    <p className={`${lato.className} text-xs md:text-2xl text-center`} >К сожалению, страница не найдена,<br /> но вы можете перейти на главную страницу</p>
                </div>
                <button
                    className="
                        fixed bottom-5 left-1/2 -translate-x-1/2
                        md:static md:bottom-auto md:left-auto md:translate-x-0
                        px-20 py-3.5 md:px-28 md:py-5 rounded-3xl text-white 
                        bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
                        "
                >
                    <Link href="/home" className="text-2xl xl:text-2xl font-medium text-white">На главную</Link>
                </button>
            </div>
        </div>
    );
}
