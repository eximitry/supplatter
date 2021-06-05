import React, { FC, useState } from 'react';

import {
    StyledSidebar,
    StyledSidebarBurger,
    StyledSidebarHeader,
    StyledSidebarList,
    StyledSidebarListItem
} from './styles';

const Sidebar: FC = () => {
    const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);
    return (
        <StyledSidebar hiddenSidebar={isHiddenSidebar}>
            <StyledSidebarBurger hiddenSidebar={isHiddenSidebar} onClick={() => {
                setIsHiddenSidebar(!isHiddenSidebar);
            }
            }/>
            <StyledSidebarHeader>
                Supplatter
            </StyledSidebarHeader>
            <StyledSidebarList>
                {['Задачи', 'Планинг', 'Трекер'].map((item, idx) => (
                    <StyledSidebarListItem key={idx}>
                        {item}
                    </StyledSidebarListItem>
                ))}
            </StyledSidebarList>
        </StyledSidebar>
    );
};

export default Sidebar;
