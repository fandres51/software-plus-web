import Footer from "../components/Footer/Footer";
import MainPageMessage from "../components/MainPageComponents/MainMessage/MainMessage";
import TeamSection from "../components/MainPageComponents/TeamSection/TeamSection";
import WhyUs from "../components/MainPageComponents/WhyUsSection/WhyUs";
import WhyUsBig from "../components/MainPageComponents/WhyUsBigScrn/WhyUsBig";
import useWindowSize from "../hooks/useWindowSize";

const MainPage = () => {
    
    const winSize = useWindowSize();

    return (  
        
        <div>
            <MainPageMessage/>
            {(winSize.width < 769) && <WhyUs /> }
            {(winSize.width > 769) && <WhyUsBig /> }
            <TeamSection />
            <Footer />
        </div>
    );
}
 
export default MainPage;