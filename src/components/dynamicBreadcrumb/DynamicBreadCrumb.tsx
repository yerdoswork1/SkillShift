'use client';

import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

const DynamicBreadcrumb = () => {

    const pathname = usePathname();
    const { t } = useTranslation();


    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return null;

    return (
        <Breadcrumb className="hidden sm:block pt-5 pb-2.5">
            <BreadcrumbList className="flex gap-x-1 md:text-sm lg:text-xl text-gray-600">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/home">
                        {t('services-page.breadcrumbs.home', { defaultValue: 'Home' })}
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {segments.map((segment, index) => {
                    const href = '/' + segments.slice(0, index + 1).join('/');
                    const isLast = index === segments.length - 1;
                    const label = t(`services-page.breadcrumbs.${segment}`, {
                        defaultValue: capitalize(segment),
                    });

                    return (
                        <span key={href} className="flex items-center gap-x-1">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="text-gray-900">
                                        {label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </span>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default DynamicBreadcrumb;