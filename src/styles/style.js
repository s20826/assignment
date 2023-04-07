import { styled} from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
export const StyledTypography = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        fontSize: '34.26px',
        lineHeight:'37px'
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '58.9px',
        lineHeight:'53px'
    },

}));
