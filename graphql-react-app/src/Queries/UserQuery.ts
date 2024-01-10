import { gql } from "@apollo/client";

export const GET_USERS_ALL = gql`
    query GET_ALL_USERS {
        getUsers {
            id
            name
        }
    }
`

export const GET_COMPANY = gql`
    query GET_ALL_COMPANY {
        getCompany {
            id
            name
        }
    }
`