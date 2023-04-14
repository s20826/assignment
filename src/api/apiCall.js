import {gql} from '@apollo/client';

export const GET_EPISODES = gql`
    query {
        episodes( filter: { episode: "S04" }) {
            results {
                episode 
                name
                air_date
            }
            info {
                count
            }
        }
    }`;

