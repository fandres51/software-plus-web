import Grid from "@material-ui/core/Grid";
import "./Title.scss";

const Title = ({ text, lines = false }) => {
    return (
        <Grid item className="Title">
            { lines && <div className="TitleLine"></div> }
            <h2>{text}</h2>
            { lines && <div className="TitleLine"></div> }
        </Grid>
    );
}

export default Title;