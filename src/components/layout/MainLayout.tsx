import React from "react";
import Header from "../ui/Header/Header";
import {MainContainer} from "./Main.styles";
import Footer from "../ui/Footer/Footer";
interface LayoutInterface {
    children: React.ReactNode;
}
const MainLayout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <div className='main_container'>
            <Header />
            <MainContainer>{children}</MainContainer>
            <Footer />
        </div>
    );
};

export default MainLayout;
