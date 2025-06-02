'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!ready) {
            setReady(true);

        }
    }, [ready]);


    if (!ready) {
        return null;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
