import styled from 'styled-components';
import { absolute, size, trs } from '../../styles/mixins';
import { clearListStyles } from '../../styles/placeholders';

interface IStyledSidebar {
    hiddenSidebar: boolean;
}

export const StyledSidebar = styled.div<IStyledSidebar>`
    ${trs()};
    background-color: var(--color-1--5);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 250px;
    position: relative;
    margin-left: ${({ hiddenSidebar }) => hiddenSidebar ? '-210px' : '0'};
    padding-right: ${({ hiddenSidebar }) => hiddenSidebar ? '40px' : '0'};
`;

export const StyledSidebarHeader = styled.div`
    color: var(--color-white);
    font-size: 22px;
    padding: 20px;
`;

export const StyledSidebarList = styled.ul`
    ${clearListStyles};
`;

export const StyledSidebarListItem = styled.li`
    color: var(--color-white);
    font-size: 16px;
    padding: 5px 20px;
`;

export const StyledSidebarBurger = styled.button<IStyledSidebar>`
    ${absolute('0', null, null, '0')};
    ${size('40px')};
    background: var(--color-1--4);
`;
