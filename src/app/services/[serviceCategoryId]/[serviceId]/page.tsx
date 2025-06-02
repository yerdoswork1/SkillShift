"use client"

import ServicePage from '@/components/pages/service-page';
import React from 'react'
import { useParams } from 'next/navigation';

type ServiceParams = {
    serviceCategoryId: string,
    serviceId: string,
};

export default function Service() {
    const { serviceCategoryId, serviceId } = useParams<ServiceParams>();

  return (
    <ServicePage serviceCategoryId={serviceCategoryId} serviceId={serviceId}/>
  )
}