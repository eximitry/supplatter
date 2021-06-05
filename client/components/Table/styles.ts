import styled from 'styled-components';
import { trs } from '../../styles/mixins';

export const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    @media screen and (max-width: 600px) {
        border: 0;
    }
`;

export const StyledTableThead = styled.thead`
    @media screen and (max-width: 600px) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`;

export const StyledTableTbody = styled.tbody``;

export const StyledTableTr = styled.tr`
    ${trs()};
    background-color: #f8f8f8;

    &:hover {
        background-color: var(--color-1--2);
    }

    @media screen and (max-width: 600px) {
        border-bottom: 1px solid #ddd;
        display: block;
        margin-bottom: 30px;
    }
`;

export const StyledTableTd = styled.td`
    text-align: left;
    padding: 8px;
    border: 1px solid #ddd;

    @media screen and (max-width: 600px) {
        display: block;
        text-align: right;

        &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        &:last-child {
            border-bottom: 0;
        }
    }
`;

export const StyledTableTh = styled.th`
    text-align: left;
    padding: 8px;
    border: 1px solid #ddd;
`;
