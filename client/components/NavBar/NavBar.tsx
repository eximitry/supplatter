import React from 'react';

import { StyledNavBar, StyledNavBarUser, StyledNavBarUserAvatar, StyledNavBarUserName } from './styles';

const NavBar = () => {
    // const { userInfo: { email, avatar } } = useContext(AuthContext) as any;
    // console.log(email, avatar);

    return (
        <StyledNavBar>
            <StyledNavBarUser>
                <StyledNavBarUserAvatar>
                    {/*<img src={`data:image/png;base64,${avatar}`} alt={`avatar ${email}`}/>*/}
                </StyledNavBarUserAvatar>
                <StyledNavBarUserName>Name</StyledNavBarUserName>
            </StyledNavBarUser>
        </StyledNavBar>
    );
};

export default NavBar;
