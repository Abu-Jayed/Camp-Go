import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
import { FaArrowRight } from "react-icons/fa";

const Instructors = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://camp-go-server.vercel.app/allteacher')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    useTitle('CampGo || Instructors')
    console.log(classes);
    return (
        <>
        
        <h1 className="bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-gray-100 text-5xl mt-28 md:w-[420px] text-center mx-auto py-2 cursor-context-menu rounded-2xl ">Top Teacher
        </h1>
            <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-5">

                {
                    classes.map(fightClass => {
                        return <>
                            {/* {
                                console.log(fightClass)
                            } */}
                            <div key={fightClass?._id}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600 w-[350px]">
                                    <img className="rounded-md py-1 mx-auto w-[340px] h-[226px]" src={fightClass.img} alt="" />
                                    <a href="" className="p-5 hover:text-blue-500 hover:underline font-bold">{fightClass.name}</a>
                                    <div className="items-center px-4 flex  text-2xl pb-3">
                                    <p className="px-1 pt-2">{fightClass.email} </p>
                                        <p className="p-1 rounded cursor-pointer "><FaArrowRight className="mt-2"></FaArrowRight> </p>
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

export default Instructors;