import React from "react";
import Typography from '@mui/material/Typography';
import {StyledGrid} from "../styles/style";

export default function Header() {
    return (
        <StyledGrid container direction={"row"} alignItems={"center"}
                    component={'header'}
                    sx={{ height: {xs: '71px', sm: '95px'},
                    }}>
            <Typography noWrap href="/"
                        sx={{
                            fontSize: {xs: '29.35px', sm: '34.1px'},
                            ml:{xs: '0', sm: '66.5px'},
                            mt:{xs:'2px', sm:'0px'}
                        }
            }>LOREM IPSUM
            </Typography>
        </StyledGrid>
    )
}