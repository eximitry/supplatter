import {
    StyledTable,
    StyledTableTbody,
    StyledTableThead,
    StyledTableTh,
    StyledTableTr,
    StyledTableTd
} from './styles';
import axios from 'axios';
import { useActions } from '../../hooks/useActions';

const Table = ({ rows }) => {
    const fields = ['username', 'email', 'password', 'avatar'];

    const { fetchUsers } = useActions();

    const removeFromDB = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`).then(() => fetchUsers());
        } catch (e) {
            console.log(e)
        }
    };

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
                    rows.map(({ _id, username, email, password, avatar }, idx) => {
                        return (
                            <StyledTableTr key={idx} onClick={() => console.log('click tr')}>
                                <StyledTableTd data-label={'username'}>{username}</StyledTableTd>
                                <StyledTableTd data-label={'email'}>{email}</StyledTableTd>
                                <StyledTableTd data-label={'password'}>{password}</StyledTableTd>
                                <StyledTableTd data-label={'avatar'}>
                                    <img src={'http://localhost:5000/' + avatar} width={"auto"} height={75}/>
                                    {avatar}
                                </StyledTableTd>
                                <StyledTableTd>
                                    <button onClick={() => {removeFromDB(_id)}}>Remove</button>
                                </StyledTableTd>
                            </StyledTableTr>
                        );
                    })
                }
            </StyledTableTbody>
        </StyledTable>
    );
};

export default Table;
