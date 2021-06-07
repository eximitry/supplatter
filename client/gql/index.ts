// import { gql } from '@apollo/client';

// export const GET_ALL_USERS = gql`
//     query {
//         getAll {
//             _id
//             username
//             email
//             password
//         }
//     }
// `;

export const GET_ALL_USERS = `
    query {
        getAll {
            _id
            username
            email
            password
        }
    }
`;

export const CREATE_USER = (username, email, password) => `
    mutation {
        create(input: {username: "${username}", email: "${email}", password: "${password}"}) {
            _id,
            username
            email
            password
        }
    }
`;

export const DELETE_USER = (id) => `
    mutation {
        delete(input: {_id: "${id}" }) {
            _id,
            username
            email
            password
        }
    }
`;

