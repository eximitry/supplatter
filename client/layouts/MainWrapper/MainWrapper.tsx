import { FC } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Table from '../../components/Table';

import { StyledContent, StyledMain, StyledMainWrapper } from './styles';

const MainWrapper: FC = () => {
    return (
        <StyledMainWrapper>
            <Sidebar/>
            <StyledMain>
                <Header/>
                <StyledContent>
                    <Table />
                </StyledContent>
            </StyledMain>
        </StyledMainWrapper>
    );
};

export default MainWrapper;
