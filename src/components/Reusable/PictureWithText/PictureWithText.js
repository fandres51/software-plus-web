import { Grid } from "@material-ui/core";
import './PictureWithText.scss'

const PictureWithText = ({pictureURL, title, text}) => {
    return (  
        <Grid container className="picWtxt">
            <Grid item>
                <img className="picWtxtReasonsImg" src={pictureURL} alt="Imagen"></img>
            </Grid>   
            <Grid item>
                <div>
                    <h3 className="picWtxtTitle">{title}</h3>
                </div>
                <div>
                    <p className="picWtxtText">{text}</p>
                </div>
            </Grid>   
        </Grid>
    );
}
 
export default PictureWithText;