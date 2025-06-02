'use client'

import Messengers from './Messengers'
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

function Contacts() {
  
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1">
      <p className='mb-2 lg:font-normal font-bold lg:text-2xl text-xl'>{t('footer.contacts')}</p>
      <Link href="tel:+77008008187">+7 700 800 81 87</Link>
      <Messengers />
    </div>
  )
}

export default Contacts
