import MainPageMessage from "../components/MainPageComponents/MainMessage/MainMessage";
import TeamSection from "../components/MainPageComponents/TeamSection/TeamSection";
import WhyUs from "../components/MainPageComponents/WhyUsSection/WhyUs";

const MainPage = () => {
    return (  
        <div>
            <MainPageMessage />
            <WhyUs />
            <TeamSection />
        </div>
    );
}
 
export default MainPage;