import Image from "next/image"
import LogoIcon from "@/assets/header-logo.svg"
import Link from "next/link"


const Logo = () => {

    return (
        <Link href="/home" className='flex items-center gap-1' >
            <div className='w-4 md:w-8 xl:w-9 2xl:w-10'  >
                <Image src={LogoIcon} alt="Skill Shift" className='w-full' />
            </div>
            <span className="hover:text-[rgb(60,58,223)]" >SkillShift</span>
        </Link>
    )
}

export default Logo