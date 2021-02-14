import reasons from "../../../assets/data/whyUsReasons";
import PictureWithText from "../../Reusable/PictureWithText/PictureWithText";
import { Grid } from "@material-ui/core";
import "./WhyUs.scss";
import Title from "../../Reusable/Title/Title";

const WhyUs = () => {
    return (
        <Grid container className="WhyUs">
            <Title text="¿Por qué nosotros?" lines="true"></Title>
            { reasons.map((reason) => (
                <div className="WUblock" key={reason.id}>
                    <PictureWithText
                        pictureURL={reason.pictureURL}
                        title={reason.title}
                        text={reason.text}
                    ></PictureWithText>
                    <div className="WUline"></div>
                </div>
            ))}
        </Grid>
    );
}

export default WhyUs;