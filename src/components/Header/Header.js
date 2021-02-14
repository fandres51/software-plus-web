import { Grid, Button, IconButton } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Header.scss';

const Header = () => {
    return ( 
        <div className="Header">
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <div className="headerLogo">
                        <Button variant="outlined">Software Plus +</Button>
                    </div>
                </Grid>
                <Grid item>
                    <IconButton aria-label="whatsapp"><WhatsAppIcon /></IconButton>
                    <IconButton aria-label="facebook"><FacebookIcon /></IconButton>
                    <IconButton aria-label="instagram"><InstagramIcon /></IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
 
export default Header;