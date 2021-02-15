import Footer from "../components/Footer/Footer";
import MainPageMessage from "../components/MainPageComponents/MainMessage/MainMessage";
import TeamSection from "../components/MainPageComponents/TeamSection/TeamSection";
import WhyUs from "../components/MainPageComponents/WhyUsSection/WhyUs";
import WhyUsBig from "../components/MainPageComponents/WhyUsBigScrn/WhyUsBig";

const MainPage = () => {
    return (  
        <div>
            <MainPageMessage />
            {/* {(screen.width > 769) && <WhyUs /> }
            {(screen.width < 769) && <WhyUsBig /> } */}
            <WhyUs />
            <TeamSection />
            <Footer />
        </div>
    );
}
 
export default MainPage;