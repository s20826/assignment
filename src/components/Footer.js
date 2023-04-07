import React from "react";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

export default function Footer() {
    return (
        <Grid container direction="column"
              justifyContent='center'
              alignItems="center"
              component="footer"
              width='100%'
              mt={4.5}
              sx={{
                  bottom: 0,
                  height: {xs: 50, sm: 69},
                  backgroundColor: '#464646',
              }}>

            <Typography
                sx={{
                    fontFamily: 'Lato-Regular',
                    color: 'white',
                    fontSize: {xs: '13.8px', sm: '15.7px'},
                    mr: {xs: 2.3, sm: 0}
                }}>
                LOREM IPSUM ©2021
            </Typography>
        </Grid>
    )
}
