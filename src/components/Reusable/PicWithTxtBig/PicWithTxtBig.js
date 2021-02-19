import { Grid } from '@material-ui/core';
import "./PicWithTxtBig.scss";

const PicWithTxtBig = ({ title, text, pictureURL, orient="row" }) => {
    return (
        <Grid
            className="ptb"
            container
            direction={orient}
        >
            <Grid>
                <img src={pictureURL} alt="imagen referencial" className="ptb-img" />
            </Grid>
            <Grid className="ptb-txt">
                <h2>{title}</h2>
                <p>{text}</p>
            </Grid>
        </Grid>
    )
}
 
export default PicWithTxtBig;