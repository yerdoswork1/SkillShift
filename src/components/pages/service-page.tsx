import { services } from '@/consts'
import BreadcrumbComponent, { BreadcrumbList } from '@/components/ui/BreadcrumbComponent';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import BackButton from "@/assets/icons/back_button_mobile.svg"
import i18n from '@/lib/i18n';
import { useTranslation } from 'react-i18next';
import { montserrat } from '@/assets/fonts/fonts';

interface Props {
    serviceCategoryId: string,
    serviceId: string,
}

export default function ServicePage({serviceCategoryId, serviceId}: Props) {
    const serviceCategory = services.find(category => category.id === serviceCategoryId);
    const serviceInfo = serviceCategory?.items?.find(service => service.id === serviceId);

    const {t} = useTranslation("common");

    if (!serviceInfo || !serviceCategory) redirect("/services");

    const priceFormatted = new Intl.NumberFormat("ru-RU").format(Number(serviceInfo!.price));

    const breadCrumbList: BreadcrumbList[] = [
        { link: "/services", name: t("header.directions") },
        { link: `/services/${serviceCategoryId}`, name: t(`header.${serviceCategory!.id}`) },
        { link: `/services/${serviceCategoryId}`, name: t(`services.${serviceCategory!.id}.${serviceInfo!.id}.name`), lastItem: true },
    ];
    
  return (
    <div className='py-8'>
        <BreadcrumbComponent links={breadCrumbList} />

        <div className='flex flex-col md:flex-row gap-6 relative'>
            <button onClick={() => redirect(`/services/${serviceCategoryId}`)} 
                className='block md:hidden absolute top-4 md:top-6 left-2 md:left-10 w-12 sm:w-16 cursor-pointer '
            >
                <Image src={BackButton} alt='back' className='w-full' />
            </button>
            
            {/* картинка */}
            <div className='md:w-[45%] md:aspect-5/6 xl:aspect-square 2xl:aspect-7/5 md:min-h-70'>
                {
                    serviceInfo?.image && <Image src={serviceInfo.image} alt='' className='h-full object-cover rounded-xl' />
                }
            </div>

            {/* описание */}
            <div className='md:w-[55%] md:min-h-70 flex flex-col justify-between gap-3 md:gap-3'>
                <div className='flex flex-col md:gap-4 xl:gap-7'>
                    <h1 className='font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-base '>
                        {t(`services.${serviceCategoryId}.${serviceId}.name`)}
                    </h1>

                    {/* description */}
                    <p className='xl:text-3xl lg:text-xl sm:text-base text-[14px] md:mb-0 mt-3'>
                        {t(`services.${serviceCategoryId}.${serviceId}.desc-1`)}
                    </p>

                    { // чек второй абзац для дескрипшн
                        i18n.exists(`services.${serviceCategoryId}.${serviceId}.desc-2`) 
                        && (
                            <p className='xl:text-3xl lg:text-xl sm:text-base text-[14px] mt-1'>
                                {t(`services.${serviceCategoryId}.${serviceId}.desc-2`)}
                            </p>
                        ) 
                    }
       


                    {/* прайс */}
                    <p className=' text-2xl lg:text-4xl md:mt-4 mt-3'>{`${priceFormatted} ₸ ${t(`services.per-month`)}`}</p>
                </div>

                <button className={`xl:w-max xl:text-2xl lg:text-xl sm:text-xl text-lg text-white bg-blue-700 rounded-xl xl:rounded-2xl sm:px-6 px-2 xl:px-8 py-2.5 sm:py-8 md:py-3 mb-2.5 cursor-pointer hover:bg-blue-800 active:bg-blue-900 ${montserrat.className} font-semibold`}>
                        {t("services.text-whatsapp")}
                </button>
            </div>
        </div>
    </div>
  )
}
