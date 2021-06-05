import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: var(--color-1--3);
    display: flex;
    align-items: center;
    padding: 0 20px;
`;

export const StyledHeaderUser = styled.div`
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
`;

export const StyledHeaderUserAvatar = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--color-1--1);
    margin-right: 10px;
    flex-shrink: 0;
`;
export const StyledHeaderUserName = styled.p`
    font-size: 16px;
    padding: 0;
`;
