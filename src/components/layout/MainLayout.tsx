import React from "react";
import Header from "../ui/Header/Header";
interface LayoutInterface {
    children: React.ReactNode;
}
const MainLayout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <div className='main_container'>
            <Header />
            {children}
            {/*<Footer />*/}
        </div>
    );
};

export default MainLayout;
