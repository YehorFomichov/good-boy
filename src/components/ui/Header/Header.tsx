import React from 'react';
import {HeaderContainer, HeaderTitle,HeaderIconsContainer} from "./Header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Nadácia Good Boy</HeaderTitle>
            <HeaderIconsContainer>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
            </HeaderIconsContainer>
        </HeaderContainer>
    );
};

export default Header;
