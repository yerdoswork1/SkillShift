'use client'

import { services } from '@/consts';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ServiceCard from '@/components/ui/ServiceCard';
import FilterPanel from './service-category/FilterPanel';
import BreadcrumbComponent, { BreadcrumbList } from '@/components/ui/BreadcrumbComponent';
import { useTranslation } from 'react-i18next';


interface Props {
    serviceCategoryId: string,
}

export default function ServiceCategoryPage({ serviceCategoryId }: Props) {
    const { t } = useTranslation("common");


    const serviceCategory = services.find(serviceCategory => serviceCategory.id === serviceCategoryId);

    if (!serviceCategory) {
        redirect("/");
    }

    let servicesList = serviceCategory?.items; // массив всех категорий услуг

    const subCategories = serviceCategory?.subCategories; // массив саб-категорий, если есть

    const [selectedSubCategory, setSelectedSubCategory] = useState(subCategories && subCategories[0]); // либо первая доступная саб-категория, либо undefined

    if (selectedSubCategory) {
        servicesList = serviceCategory?.items.filter(item => item.subCategory === selectedSubCategory);
    }

    const breadCrumbList: BreadcrumbList[] = [
        { link: "/services", name: t("header.directions") },
        { link: `/services/${serviceCategoryId}`, name: t(`header.${serviceCategory!.id}`), lastItem: true }
    ];


    // установить сохраненную сабкатегорию из session storage, если есть
    useEffect(() => {
        const savedSubCategory = sessionStorage.getItem(`${serviceCategoryId}-subcategory`);
        if (savedSubCategory) {
            setSelectedSubCategory(savedSubCategory);
        }
    }, [serviceCategoryId]);


    return (
        <div className='py-8'>

            <BreadcrumbComponent links={breadCrumbList} />
            <FilterPanel serviceCategoryId={serviceCategoryId} subCategories={serviceCategory?.subCategories} selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory} />

            <div className='flex flex-wrap gap-y-3 py-6 gap-2.5 sm:gap-x-5 md:gap-6 lg:gap-7 xl:gap-10 2xl:gap-12'>
                {
                    servicesList?.map((item, i) => (
                        <ServiceCard key={`service-${i}`} name={t(`services.${serviceCategoryId}.${item.id}.name`)} image={item?.image} price={item.price} url={`/services/${serviceCategoryId}/${item.id}`} />
                    ))
                }
            </div>

        </div>
    );
}