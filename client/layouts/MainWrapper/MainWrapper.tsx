import React from 'react';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import { StyledContent, StyledMain, StyledMainWrapper } from './styles';

const MainWrapper = ({ children }: any) => {
    console.log('MainWrapper');

    return (
        <StyledMainWrapper>
            <SideBar />
            <StyledMain>
                <NavBar />
                <StyledContent>{children}</StyledContent>
            </StyledMain>
        </StyledMainWrapper>
    );
};

export default MainWrapper;
