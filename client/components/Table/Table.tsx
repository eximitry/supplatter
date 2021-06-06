import {
    StyledTable,
    StyledTableTbody,
    StyledTableThead,
    StyledTableTh,
    StyledTableTr,
    StyledTableTd
} from './styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Table = () => {
    const fields = ['username', 'email', 'password'];
    const { users, error } = useTypedSelector(state => state.users)

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
