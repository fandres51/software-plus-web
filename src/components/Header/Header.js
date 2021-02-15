import { Grid, Button, IconButton } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Header.scss';

const Header = () => {
    return (
        <Grid container direction="row" justify="space-between" alignItems="center" className="Header">
            <Grid item>
                <div className="headerLogo">
                    <Button color="primary" variant="contained" disableElevation>Software Plus +</Button>
                </div>
            </Grid>
            <Grid item>
                <IconButton aria-label="whatsapp"><WhatsAppIcon /></IconButton>
                <IconButton aria-label="facebook"><FacebookIcon /></IconButton>
                <IconButton aria-label="instagram"><InstagramIcon /></IconButton>
            </Grid>
        </Grid>
    );
}

export default Header;