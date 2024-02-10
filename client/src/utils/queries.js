import { gql } from `@apollo/client`;

export const QUERY_PROFILES = gql`
    query allProfiles {
        profiles {
            __id
            firstName
            lastName
            email
            password
            createdAt
            updatedAt
        }
    }
`;
// hits profiles defined in >server>schemas>TypeDefs.js

export const QUERY_SINGLE_PROFILE = gql`
        query singleProfile ($profileId: ID!) {
            profile (profileId: $profileId){
                __id 
                name
                skills
            }
        }
`;