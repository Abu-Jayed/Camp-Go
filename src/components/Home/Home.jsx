import Banner from "./Banner/Banner";
import AboutCampGo from "./Extra/AboutCampGo";
import PopularClass from "./PopularClass/PopularClass";
import PopularTeacher from "./PopularTeacher/PopularTeacher";

const Home = () => {
    return (
        <div>
            <div className="m">

            <Banner></Banner>
            </div>
            <PopularClass></PopularClass>
            <PopularTeacher></PopularTeacher>
            <AboutCampGo></AboutCampGo>
        </div>
    );
};

export default Home;