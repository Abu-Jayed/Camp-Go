import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";

const PopularTeacher = () => {
    const [classes, setClasses] = useState([])
    const [uniquedata, setUniquedata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes/teacher')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    // console.log('unique classes',uniquedata);

    useEffect(() => {
        const data = classes?.filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              t => t.instructorEmail === item.instructorEmail
            )
        );
    
        setUniquedata(data);
      }, [classes]);

    console.log('unique data', uniquedata);
    return (
        <>
            <h1 className="bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-gray-100 text-5xl mt-28 md:w-[420px] text-center mx-auto py-2 cursor-context-menu rounded-2xl ">Top Teacher
            </h1>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-10">

                {
                    uniquedata?.slice(0, 6).map((fightClass,i) => {
                        return <>

                            <div key={i}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.instructorImage} alt="" />
                                    <a href="" className="pt-5 pl-5 text-blue-400 font-bold">{fightClass.className}</a>
                                    <div className="ml-5">
                                    <p>Name: <span className="uppercase">{fightClass.instructorName}</span></p>
                                    <p>{fightClass.instructorEmail}</p>
                                    </div>
                                    <p className="font-bold text-xl px-5">{fightClass.enrolled} Enrolled</p>
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarHalf></BsStarHalf>
                                        <p><span className="text-violet-500"> ({fightClass.enrolled})</span></p>
                                        {/* <button onClick={handleOrderConfirm} className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 ">Details</button> */}
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

export default PopularTeacher;