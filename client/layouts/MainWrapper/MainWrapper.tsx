import React from 'react';

import Sidebar from '../../components/Sidebar';

import { StyledContent, StyledMain, StyledMainWrapper } from './styles';

const MainWrapper = () => {
    return (
        <StyledMainWrapper>
            <Sidebar />
            <StyledMain>
                {/*<Header/>*/}
                <StyledContent>
                    Content
                </StyledContent>
            </StyledMain>
        </StyledMainWrapper>
    );
};

export default MainWrapper;
