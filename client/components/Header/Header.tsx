import { StyledHeader, StyledHeaderUser, StyledHeaderUserAvatar, StyledHeaderUserName } from './styles';

const Header = () => {
    return (
        <StyledHeader>
            Heaaaaaaaaaaaaader
            <StyledHeaderUser>
                <StyledHeaderUserAvatar/>
                <StyledHeaderUserName>test TEST</StyledHeaderUserName>
            </StyledHeaderUser>
        </StyledHeader>
    );
};

export default Header;
