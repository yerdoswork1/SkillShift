
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (

        <div className="relative mx-auto w-full px-2.5 sm:px-6 md:px-8 2xl:max-w-[1760px]">
            {children}
            <div className="h-17 w-full block md:hidden bg-transparent"></div>
        </div>
    )
}

export default Layout