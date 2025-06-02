'use client'

import Image from "next/image"
import Link from "next/link"
import LinkToIconSrc from "@/assets/icons/link-to-icon.svg"

type LinkToIconProps = {
    href: string
    className?: string
}

const LinkToIconComponent = ({ href, className }: LinkToIconProps) => {
    return (
        <Link href={href} className={className}>
            <Image
                className="w-6 md:w-7 xl:w-14 2xl:w-16 hover:rotate-45 transition-transform duration-300"
                src={LinkToIconSrc}
                alt="Перейти"
            />
        </Link>
    )
}

export default LinkToIconComponent
