import styled from 'styled-components';
import { absolute, size, trs } from '../../styles/mixins';
import { clearListStyles } from '../../styles/placeholders';

interface IStyledSideBar {
    hiddenSideBar: boolean;
}

export const StyledSideBar = styled.div<IStyledSideBar>`
    ${trs()};
    background-color: var(--color-1--5);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 250px;
    position: relative;
    margin-left: ${({ hiddenSideBar }) => (hiddenSideBar ? '-210px' : '0')};
    padding-right: ${({ hiddenSideBar }) => (hiddenSideBar ? '40px' : '0')};
`;

export const StyledSideBarHeader = styled.div`
    color: var(--color-white);
    font-size: 22px;
    padding: 20px;
`;

export const StyledSideBarList = styled.ul`
    ${clearListStyles};
`;

export const StyledSideBarListItem = styled.li`
    color: var(--color-white);
    font-size: 16px;
    padding: 5px 20px;

    a {
        color: var(--color-white);
    }
`;

export const StyledSideBarBurger = styled.button<IStyledSideBar>`
    ${absolute('0', null, null, '0')};
    ${size('40px')};
    background: var(--color-1--4);
`;
