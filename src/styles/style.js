import { styled} from '@mui/material/styles';
import Grid from "@mui/material/Grid";

export const StyledGrid = styled(Grid)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        justifyContent:'center',
        backgroundImage: '-webkit-linear-gradient(150deg, #DAED49 50%, #DAED49 50%)'
    },
    [theme.breakpoints.up('md')]: {
        justifyContent:'left',
        backgroundImage: '-webkit-linear-gradient(150deg, #00BDD4 50.4%, #DAED49 50%)',

    }
}));

