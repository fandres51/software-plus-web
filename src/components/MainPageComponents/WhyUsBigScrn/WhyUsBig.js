import reasons from "../../../assets/data/whyUsReasons";
import "./WhyUsBig.scss";
import Title from "../../Reusable/Title/Title";
import PicWithTxtBig from "../../Reusable/PicWithTxtBig/PicWithTxtBig";

const WhyUsBig = () => {
    return (
        <div className="wub">
            <div className="wub-title">
                <Title text="¿Por qué nosotros?" lines="true"></Title>
            </div>
            <div className="wub-reasons">
                {reasons.map((reason, i) => (
                    <div className="reason" key={reason.id}>
                        <PicWithTxtBig title={reason.title} text={reason.text} pictureURL={reason.pictureURL}/>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default WhyUsBig;