// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './banner.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Banner = () => {
    return (
        <div className='mt-40 md:mt-0'>
            <Carousel responsive={responsive}>
                <div >
                    <img className='bg-black relative' src='https://webdesign-finder.com/youko-boxing-club/wp-content/uploads/2021/02/slide_01.jpg' />
                    <div className='overlayy'></div>
                    <div className="">
                        <h1 className='w-[270px] md:w-[660px] top-[60px] md:top-[180px] left-[150px] md:left-80  text-orange-500 absolute md:text-5xl text-xl font-bold' style={{ transform: 'translate(-50%, -50%)' }}>WELCOME TO CampGO WORKOUT SCHOOL</h1>
                        <p className=" text-[12px] md:text-xl absolute text-white md:top-[250px] top-[100px] md:left-6 left-3 md:w-[655px] w-[330px]">With a supportive community and experienced instructors, our karate school provides a safe and nurturing environment for individuals to embark on their martial arts journey.</p>
                        <button className="absolute top-[145px] md:top-[340px] left-3 md:left-5 md:w-[180px] md:h-[60px] bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:text-lg rounded-none transform  duration-200 ease-in-out">GET A LESSON</button>
                        <p className="absolute top-[155px] md:top-[350px] left-40 md:left-52 w-[100px] md:w-[180px] h-[40px] md:h-[60px] border-2 hover:cursor-pointer text-white py-1 md:text-center md:py-3 px-1 md:px-0 hover:bg-white hover:text-black transform  duration-300 hover:font-bold hover:text-lg ease-in-out">READ ME</p>
                    </div>
                </div>
                <div >
                    <img className='bg-black relative' src='http://webdesign-finder.com/youko-street-workout/wp-content/uploads/2021/02/slide03.jpg' />
                    <div className='overlayy'></div>
                    <div className="">
                        <h1 className='w-[270px] md:w-[660px] top-[60px] md:top-[180px] left-[150px] md:left-80  text-yellow-500 absolute md:text-5xl text-xl font-bold' style={{ transform: 'translate(-50%, -50%)' }}>WELCOME TO CampGO WORKOUT SCHOOL</h1>
                        <p className=" text-[12px] md:text-xl absolute text-white md:top-[250px] top-[100px] md:left-5 left-3 md:w-[655px] w-[330px]">With a supportive community and experienced instructors, our karate school provides a safe and nurturing environment for individuals to embark on their martial arts journey.</p>
                        <button className="absolute top-[145px] md:top-[340px] left-3 md:left-5 md:w-[180px] md:h-[60px] bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:text-lg rounded-none transform  duration-200 ease-in-out">GET A LESSON</button>
                        <p className="absolute top-[155px] md:top-[350px] left-40 md:left-52 w-[100px] md:w-[180px] h-[40px] md:h-[60px] border-2 hover:cursor-pointer text-white py-1 md:text-center md:py-3 px-1 md:px-0 hover:bg-white hover:text-black transform  duration-300 hover:font-bold hover:text-lg ease-in-out">READ ME</p>
                    </div>
                </div>
                <div >
                    <img className='bg-black relative' src='http://webdesign-finder.com/youko-street-workout/wp-content/uploads/2021/02/slide01.jpg' />
                    <div className='overlayy'></div>
                    <div className="">
                        <h1 className='w-[270px] md:w-[660px] top-[60px] md:top-[180px] left-[150px] md:left-80  text-orange-500 absolute md:text-5xl text-xl font-bold' style={{ transform: 'translate(-50%, -50%)' }}>WELCOME TO CampGO WORKOUT SCHOOL</h1>
                        <p className=" text-[12px] md:text-xl absolute text-white md:top-[250px] top-[100px] left-3 md:left-5 md:w-[655px] w-[330px]">With a supportive community and experienced instructors, our karate school provides a safe and nurturing environment for individuals to embark on their martial arts journey.</p>
                        <button className="absolute top-[145px] md:top-[340px] left-3 md:left-5 md:w-[180px] md:h-[60px] bg-orange-500 text-white hover:bg-white hover:text-orange-500 hover:text-lg rounded-none transform  duration-200 ease-in-out">GET A LESSON</button>
                        <p className="absolute top-[155px] md:top-[350px] left-40 md:left-52 w-[100px] md:w-[180px] h-[40px] md:h-[60px] border-2 hover:cursor-pointer text-white py-1 md:text-center md:py-3 px-1 md:px-0 hover:bg-white hover:text-black transform  duration-300 hover:font-bold hover:text-lg ease-in-out">READ ME</p>
                    </div>
                </div>
                
                

            </Carousel>;

        </div>

    );
};

export default Banner;