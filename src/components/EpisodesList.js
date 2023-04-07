import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Divider, List, ListItem} from "@mui/material";

export default function EpisodesList(props) {
    const data = props.episodes.results
    const count = props.episodes.info.count

    return (
        <List
            sx={{
                mt: {xs: 5.3, md: 15.3},
                ml: {xs: 2, md: 8.2},
                mb: {xs: 0.5, sm: 11.5}
            }}>
            {data.map((episode, index) =>
                <ListItem key={index}
                          sx={{
                              maxWidth: 'auto',
                              pl: 1.2,
                              py: 0
                          }}>
                    <Grid container>
                        <Grid item>
                            <Typography variant="subtitle1"
                                        sx={{
                                            fontFamily: 'Lato-Black',
                                            fontSize: {xs: '17.8px', sm: '24.5px'},
                                            mb: {xs: 0.5, sm: 0}
                                        }}>
                                {episode.episode}
                            </Typography>
                        </Grid>
                        <Divider orientation={"vertical"} flexItem={true}
                                 sx={{ml: 4.3, mr: 3.7, display: {xs: 'none', sm: 'block'}}}/>
                        <Grid item xs={12} sm={6} md={7} lg={8} container>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <Typography color={index % 2 ? '#DAED49' : '#00BDD4'} variant="subtitle1"
                                                sx={{
                                                    fontFamily: 'Lato-Bold',
                                                    fontSize: {xs: '17.5px', sm: '24.5px'},
                                                    pb: {xs: 1.1, sm: 0.84}
                                                }}>{episode.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Lato-Bold',
                                            fontSize: {xs: '14.8px', sm: '19.6px'},
                                            color: '#989898',
                                            mb: {xs: 2.2, sm: 3.38}
                                        }}>
                                        {episode.air_date}
                                    </Typography>
                                </Grid>
                                {index + 1 !== count &&
                                    <Divider orientation={"horizontal"}
                                             sx={{
                                        display: {xs: 'block', sm: 'none'},
                                        mb: 1.57 }}
                                    />}
                            </Grid>
                        </Grid>
                    </Grid>
                </ListItem>
            )}
        </List>
    )
}