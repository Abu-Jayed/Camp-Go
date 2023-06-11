import Banner from "./Banner/Banner";
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
        </div>
    );
};

export default Home;