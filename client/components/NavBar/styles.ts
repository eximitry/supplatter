import styled from 'styled-components';

export const StyledNavBar = styled.header`
    background-color: var(--color-1--3);
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const StyledNavBarUser = styled.div`
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
`;

export const StyledNavBarUserAvatar = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--color-1--1);
    margin-right: 10px;
    flex-shrink: 0;
`;
export const StyledNavBarUserName = styled.p`
    font-size: 16px;
    padding: 0;
`;
