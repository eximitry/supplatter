import React from 'react';

import {
    StyledTable,
    StyledTableTbody,
    StyledTableThead,
    StyledTableTh,
    StyledTableTr,
    StyledTableTd
} from './styles';
import { useTypedSelector } from '../hooks/useTypedSelector'; //remove this
import { NextThunkDispatch, wrapper } from '../../store'; //remove this
import { fetchUsers } from '../../store/actions-creators/users';
import axios from 'axios';
import { GRAPHQL_API } from '../../constants';
import { GET_ALL_USERS } from '../../gql'; //remove this

const Table = () => {
    const { users, error } = useTypedSelector(state => state.users);
    console.log(users, error);

    const fields = ['username', 'email', 'password'];

    const getData = async () => {
        return await axios.post(
            GRAPHQL_API, {
                query: GET_ALL_USERS
            }
        ).then(response => {
            return response.data.getAll;
        });
    }
    // console.log(getData());

    return (
        <StyledTable>
            <StyledTableThead>
                <StyledTableTr>
                    {
                        fields.map((th, idx) => {
                            return <StyledTableTh key={idx}>{th}</StyledTableTh>
                        })
                    }
                </StyledTableTr>
            </StyledTableThead>
            <StyledTableTbody>
                {
                    users.map(({ username, email, password }, idx) => {
                        return (
                            <StyledTableTr key={idx} onClick={() => console.log('click tr')}>
                                <StyledTableTd data-label={'username'}>{username}</StyledTableTd>
                                <StyledTableTd data-label={'email'}>{email}</StyledTableTd>
                                <StyledTableTd data-label={'password'}>{password}</StyledTableTd>
                            </StyledTableTr>
                        );
                    })
                }
            </StyledTableTbody>
        </StyledTable>
    );
};

export default Table;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchUsers());
});
