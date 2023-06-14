import { FaArrowRight } from "react-icons/fa";

const AboutCampGo = () => {
    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            <div className="">
                <img src="https://webdesign-finder.com/youko-street-workout/wp-content/uploads/2021/02/img_01.png" alt="" />
            </div>
            <div className="">
                <div className="mt-12">
                <img src="https://webdesign-finder.com/youko-street-workout/wp-content/uploads/2021/02/signature.png" alt="" className="mb-2" />
                <h1 className="text-4xl font-bold mb-2">
                ABOUT CAMPGO WORKOUT
                </h1>
                <h1 className="mb-2 text-[#dfa100] text-xl font-bold">THERESA WEBB</h1>
                <h3 className="mb-2 font-bold">Fight School has specialized in Street Workout since 1986</h3>
                <p className="text-[17px] tracking-wide">We teach Street Workout because we love it — not because we want to make money on you. Unlike other Street Workout schools, we do not require you to sign long term contracts. You just pay one low monthly fee for your Street Workout classes.</p>
                <div className="text-[#dfa100] text-xl font-bold mt-2 flex items-center gap-2">
                    <div className="cursor-pointer flex items-center gap-3 mt-2">

                <h1>READ MORE </h1><FaArrowRight></FaArrowRight>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCampGo;