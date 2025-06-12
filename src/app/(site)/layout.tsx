// app/(site)/layout.tsx
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/navbar/Navbar";
import { TranslationProvider } from "@/components/translationProvieder/TranslationProvider";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <TranslationProvider>
            <Header />
            <main className="flex-grow">
                <Layout>
                    {children}
                    <Navbar />
                </Layout>
            </main>
            <Footer />
        </TranslationProvider>
    );
}
