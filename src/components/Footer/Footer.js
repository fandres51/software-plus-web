import { Grid } from "@material-ui/core";
import "./Footer.scss";

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return (  
        <Grid 
            container 
            className="Footer" 
            direction="column"
            justify="center"
            alignItems="flex-start"
        >
            <h2 className="footerTit">Contáctanos</h2>
            <Grid container direction="row" alignItems="center"> <WhatsAppIcon className="FooterIcon"/> <p>099999999</p> </Grid>
            <Grid container direction="row" alignItems="center"> <FacebookIcon className="FooterIcon"/> <p>facebook.com/software+</p> </Grid>
            <Grid container direction="row" alignItems="center"> <LinkedInIcon className="FooterIcon"/> <p>linkedin.com/softwareplus</p> </Grid>
            <Grid container direction="row" alignItems="center"> <EmailIcon className="FooterIcon"/>    <p>info@softwareplus.com</p> </Grid>
        </Grid>
    );
}
 
export default Footer;