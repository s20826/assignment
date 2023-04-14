import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {StyledTypography} from "../styles/style";
import {useQuery} from '@apollo/client';
import EpisodesList from "./EpisodesList";
import {GET_EPISODES} from "../api/apiCall";

export default function Episodes() {
    const {loading, error, data} = useQuery(GET_EPISODES);
    let content;
    if (error) {
        content = <p>Error : {error.message}</p>
    } else if (loading) {
        content = <p>Loading...</p>
    } else {
        content = <EpisodesList episodes={data}></EpisodesList>
    }
    return (
            <Box component={'main'}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {xs: 'none', lg: 'repeat(2, 50%)'},
                        gridTemplateRows: {xs: 'fit-content', lg: 'none'}
                    }}>
                    <Box ml={{xs: 0, md: 15, lg: 10, xl: 22.5}}>
                        <Box
                            sx={{
                                mt: {xs: '45px', sm: '130px'},
                                mb: 5.5,
                                ml: {xs: 3.5, sm: 2},
                                width: {xs: 340, sm: 660},
                            }}>
                            <StyledTypography
                                sx={{
                                    fontFamily: 'Lato-Regular',
                                }}>Episodes of the
                                <StyledTypography
                                    component="span"
                                    sx={{
                                        fontFamily: 'Lato-Bold',
                                    }}> 4th
                                </StyledTypography> season of the series
                                <Typography
                                    component="span"
                                    sx={{
                                        fontFamily: 'Lato-Bold',
                                        fontSize: {xs: '39.2px', sm: '68.8px'},
                                        color: '#00BDD4',
                                        lineHeight: {xs: '44px', sm: '82px'}
                                    }}> Rick and Morty
                                </Typography>
                            </StyledTypography>
                        </Box>
                        <Box component="img"
                             src="/images/image.png"
                             maxWidth={{xs: '85%', md: '100%'}}
                             alt={'RickAndMortyImage'}
                             sx={{ml: {xs: 3.2, sm: 0}}}>
                        </Box>
                    </Box>
                    {content}
                </Box>
            </Box>
        )

}
