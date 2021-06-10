import { FC, useRef, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Table from '../../components/Table';

import { StyledContent, StyledMain, StyledMainWrapper } from './styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from 'axios';
import { useActions } from '../../hooks/useActions';

const MainWrapper: FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { users } = useTypedSelector(state => state.users);
    const imageInputRef = useRef();
    const [image, setImage] = useState(null);

    const { fetchUsers } = useActions();

    console.log(users);

    const addToDB = async () => {
        try {
            await axios.post('http://localhost:5000/users', {
                username,
                email,
                password
            }).then(() => fetchUsers());
        } catch (e) {
            console.log(e)
        }
    };

    const testAddFile = (e) => {
        console.log('add file');
        console.log(image);
    };

    return (
        <StyledMainWrapper>
            <Sidebar/>
            <StyledMain>
                <Header/>
                <StyledContent>
                    <div>
                        <input type="file" onChange={event => setImage(event.target.files[0])} ref={imageInputRef} />
                        <button onClick={testAddFile}>Test add file</button>
                    </div>
                    <input type="text" value={username} onInput={(e) => setUsername(e.currentTarget.value)} />
                    <input type="text" value={email} onInput={(e) => setEmail(e.currentTarget.value)} />
                    <input type="text" value={password} onInput={(e) => setPassword(e.currentTarget.value)} />
                    <button onClick={addToDB}>Add to DB</button>
                    <Table rows={users} />
                </StyledContent>
            </StyledMain>
        </StyledMainWrapper>
    );
};

export default MainWrapper;
