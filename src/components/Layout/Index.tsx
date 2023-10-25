import React, { ReactNode } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
