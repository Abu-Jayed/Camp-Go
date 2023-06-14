import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";

const PopularClass = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://camp-go-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // console.log(classes);

    return (
        <>
            <h1 className="bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-gray-100 text-5xl mt-28 md:w-[420px] text-center mx-auto py-2 cursor-context-menu rounded-2xl ">Top Classes
            </h1>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-10">

                {
                    classes.slice(0, 6).map((fightClass,i) => {
                        return <>

                            <div key={i} className="">
                                <div className="min-h-[400px] shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <p className="p-5 text-blue-400 font-bold">{fightClass.className}</p>
                                    <p className="font-bold text-xl px-5">{fightClass.enrolled} Enrolled</p>
                                    <div className="flex items-center justify-between">
                                {fightClass.enrolled?
                                <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarFill></BsStarFill>
                                <BsStarHalf></BsStarHalf>
                                 <span className="ml-2 text-violet-500"> ({fightClass.enrolled})</span>
                            </div> : ''
                            }
                           <p className={`${fightClass.enrolled === 0? 'ml-60':''} text-2xl mr-4 cursor-pointer`}><FaArrowRight></FaArrowRight></p>
                                    </div>
                                </div>
                            </div>
                        </>

                    })
                }
            </div>

        </>
    );
};

export default PopularClass;