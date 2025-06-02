'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next';

function Info() {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1">
        <p className=' mb-2 lg:font-normal font-bold lg:text-2xl text-xl'>{t('footer.info')}</p>
        <Link href="/public-offer-agreement">{t('footer.public-offer')}</Link>
        <Link href="/privacy">{t('footer.privacy')}</Link>
    </div>
  )
}

export default Info
