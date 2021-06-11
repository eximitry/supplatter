import { FC, useRef, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Table from '../../components/Table';

import { StyledContent, StyledMain, StyledMainWrapper } from './styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from 'axios';
import { useActions } from '../../hooks/useActions';

const MainWrapper: FC = () => {
    const { users } = useTypedSelector(state => state.users);
    console.log(users);
    const imageInputRef = useRef();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const { fetchUsers } = useActions();

    const addToDB = async () => {
        const formData = new FormData()
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('avatar', image)

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        try {
            await axios.post('http://localhost:5000/users', formData, config).then(() => fetchUsers());
        } catch (e) {
            console.log(e)
        }
    };

    const testAddFile = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <StyledMainWrapper>
            <Sidebar/>
            <StyledMain>
                <Header/>
                <StyledContent>
                    <input type="text" value={username} onInput={(e) => setUsername(e.currentTarget.value)}/>
                    <input type="text" value={email} onInput={(e) => setEmail(e.currentTarget.value)}/>
                    <input type="text" value={password} onInput={(e) => setPassword(e.currentTarget.value)}/>
                    <input type="file" onChange={testAddFile} name='picture' accept="image/*" ref={imageInputRef}/>
                    <button onClick={addToDB}>Add to DB</button>
                    <Table rows={users}/>
                </StyledContent>
            </StyledMain>
        </StyledMainWrapper>
    );
};

export default MainWrapper;
