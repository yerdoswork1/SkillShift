'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export interface BreadcrumbListItem {
    link: string
    name: string
    lastItem?: boolean
}

interface Props {
    links?: BreadcrumbListItem[]
}

export default function BreadcrumbComponent({ links }: Props) {
    const { t } = useTranslation()

    return (
        <div className="pb-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/" className="text-xs sm:text-base">
                                {t('navbar.home')}
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {links?.map((item, i) => (
                        <BreadcrumbItem key={`bread-${i}`}>
                            <BreadcrumbSeparator />
                            <BreadcrumbLink
                                asChild
                                className={`${item.lastItem ? 'text-black' : ''} text-xs sm:text-base`}
                            >
                                <Link href={item.link}>{item.name}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
