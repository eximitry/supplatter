import MainWrapper from '../layouts/MainWrapper';
import { fetchUsers } from '../store/actions-creators/users';
import { NextThunkDispatch, wrapper } from '../store';

const Index = () => {
    return <MainWrapper/>;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(await fetchUsers());
    }
);

export default Index;


