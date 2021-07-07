import React, { FC, useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import {
    StyledSideBar,
    StyledSideBarBurger,
    StyledSideBarHeader,
    StyledSideBarList,
    StyledSideBarListItem,
} from './styles';

const SideBar: FC = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const [isHiddenSideBar, setIsHiddenSideBar] = useState(false);

    const logoutHandler = (e: any) => {
        e.preventDefault();
        auth.logout();
        history.push('/auth');
    };

    return (
        <StyledSideBar hiddenSideBar={isHiddenSideBar}>
            <StyledSideBarBurger
                hiddenSideBar={isHiddenSideBar}
                onClick={() => {
                    setIsHiddenSideBar(!isHiddenSideBar);
                }}
            />
            <StyledSideBarHeader>Supplatter</StyledSideBarHeader>
            <StyledSideBarList>
                {['tasks', 'planning', 'tracker', 'profile'].map((item, idx) => (
                    <StyledSideBarListItem key={idx}>
                        <NavLink to={`/${item}`}>{item}</NavLink>
                    </StyledSideBarListItem>
                ))}
            </StyledSideBarList>
            <a href="/" onClick={logoutHandler}>
                Выйти
            </a>
        </StyledSideBar>
    );
};

export default SideBar;
