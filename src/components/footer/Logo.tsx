import Image from 'next/image';
import logoIcon from "@/assets/logo.png";

function Logo() {
  return (
    <div className='lg:w-56 w-44 '>
        <Image src={logoIcon} alt='logo icon' className="w-full" />
    </div>  
  )
}

export default Logo
