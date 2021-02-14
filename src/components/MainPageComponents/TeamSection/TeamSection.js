import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Title from "../../Reusable/Title/Title";
import "./TeamSection.scss"

const TeamSection = () => {
    return (  
        <Grid className="TeamSection">
            <Title text="¿Todavía tienes dudas?"></Title>
            <Button variant="contained" disableElevation endIcon={<ChevronRightIcon />} >
                Conoce nuestro equipo
            </Button>
        </Grid>
    );
}
 
export default TeamSection;