import DynamicBreadcrumb from '../dynamicBreadcrumb/DynamicBreadCrumb';
import ContactsSection from './contacts/ContactsSection';
import InformationSection from './contacts/InformationSection';
import OurBrancesSection from './contacts/OurBrancesSection';

const ContactsPage = () => (
    <>
        <DynamicBreadcrumb />
        <ContactsSection />
        <OurBrancesSection />
        <InformationSection />
    </>
);

export default ContactsPage;