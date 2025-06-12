"use client"

import ServiceCategoryPage from '@/components/pages/service-category-page'
import { useParams } from 'next/navigation'
import React from 'react'

export type ServiceCategoryParams = {
    serviceCategoryId: string,
};

export default function ServiceCategory() {
    const { serviceCategoryId } = useParams<ServiceCategoryParams>();

  return (
    <ServiceCategoryPage serviceCategoryId={serviceCategoryId} />
  )
}
