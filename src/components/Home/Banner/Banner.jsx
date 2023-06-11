import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './banner.css'
const Banner = () => {
    return (
        <div className='mt-40 md:mt-0'>

        <Carousel emulateTouch transitionTime={550}>
            <div >
                <img className='bg-black relative' src='http://webdesign-finder.com/youko-boxing-club/wp-content/uploads/2021/02/slide_03.jpg' />
                <div className='overlayy'></div>
                <h1 className='text-yellow-500 absolute text-4xl font-bold' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>WELCOME TO STREET WORKOUT SCHOOL</h1>
            </div>
            <div >
                <img className='bg-black relative' src='http://webdesign-finder.com/youko-street-workout/wp-content/uploads/2021/02/slide03.jpg' />
                <div className='overlayy'></div>
                <h1 className='text-yellow-500 absolute text-4xl font-bold' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>WELCOME TO STREET WORKOUT SCHOOL</h1>
            </div>
            <div >
                <img className='bg-black relative' src='http://webdesign-finder.com/youko-street-workout/wp-content/uploads/2021/02/slide01.jpg' />
                <div className='overlayy'></div>
                <h1 className='text-yellow-500 absolute text-4xl font-bold' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>WELCOME TO STREET WORKOUT SCHOOL</h1>
            </div>
        </Carousel>
        </div>

    );
};

export default Banner;