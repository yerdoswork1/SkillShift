import { Inter, Montserrat, Lato, Geologica } from "next/font/google";

export const inter = Inter({
    weight: ['400', '500'],
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

export const montserrat = Montserrat({
    weight: ['400', '500', '600'],
    subsets: ['latin', 'cyrillic'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
});

export const geologica = Geologica({
    weight: ['400', '500', '600'],
    subsets: ['latin', 'cyrillic'],
    variable: '--font-geologica',
    display: 'swap',
});
