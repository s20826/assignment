import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {StyledTypography} from "../styles/style";
import {getEpisodesApiCall} from "../api/apiCall";

class Episodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: '',
        }
    }

    fetchEpisodesList = () => {
        getEpisodesApiCall()
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        data: data.data.episodes
                    });
                },
                (error) => {
                    console.log(error)
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchEpisodesList()
    }

    render() {
        const {error, isLoaded, data} = this.state
        let content;
        if (error) {
            content = <p>Error : {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Loading...</p>
        } else {
            console.log(data)
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
                </Box>
            </Box>
        )
    }
}
export default Episodes;