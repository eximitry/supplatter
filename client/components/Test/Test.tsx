import { NextThunkDispatch, wrapper } from '../../store';
import { fetchUsers } from '../../store/actions-creators/users';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Test = () => {
    const { users, error } = useTypedSelector(state => state.users)

    if (error) {
        return <div>
            <p>Error</p>
            <h1>{error}</h1>
        </div>
    }

    return (
        <div>
            <p>success</p>
            {users}
        </div>
    );
};

export default Test;

// export const getServerSideProps = wrapper.getServerSideProps( async ({ store }) => {
//     const dispatch = store.dispatch as NextThunkDispatch;
//     console.log(dispatch);
//     await dispatch(await fetchUsers());
// });

export const getServerSideProps = wrapper.getServerSideProps(store => async (): Promise<any> => {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(await fetchUsers());
    }
);
