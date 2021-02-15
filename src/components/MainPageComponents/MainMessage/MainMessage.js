import { Grid } from "@material-ui/core";
import "./MainMessage.scss"

const MainPageMessage = () => {
    return (  
        <Grid 
            container 
            className="MainPageMessage" 
            direction="column" 
            justify="center" 
            alignItems="flex-start"
        >
            <div className="MPMMessahe">
                <h2>Convertimos</h2>
                <h2>tus ideas</h2>
                <h2>en</h2>
                <h2>realidad</h2>
            </div>
        </Grid>
    );
}
 
export default MainPageMessage;