import {gql} from "@apollo/client";
import {client} from "../index";

export function getEpisodesApiCall() {
    return client.query({
        query: gql`
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
        }`
    });
}