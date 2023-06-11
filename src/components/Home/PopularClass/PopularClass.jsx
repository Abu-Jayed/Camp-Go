import { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";

const PopularClass = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);
    // const { className, classImage, instructorName, instructorEmail, availableSeats, price, enrolled, rating, status } = classes

    const handleOrderConfirm = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Order confirm successfully",
            showConfirmButton: false,
            timer: 1400,
        });
    }
    return (
        <>
            <h1 className=" text-5xl font-bold hover:bg-[#dbff00] rounded-2xl mx-auto py-2 md:w-[420px] bg-[#dbff00] hover:bg-opacity-50 hover:text-black duration-300 text-center mt-28  text-black mb-5">Top Classes
            </h1>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-10">

                {
                    classes.slice(0, 6).map(fightClass => {
                        return <>

                            <div key={fightClass.classImage}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <p className="p-5 text-blue-400 font-bold">{fightClass.className}</p>
                                    <p className="font-bold text-xl px-5">{fightClass.enrolled} Enrolled</p>
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarHalf></BsStarHalf>
                                        <p>{fightClass.rating} <span className="text-violet-500"> ({fightClass.enrolled})</span></p>
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

export default PopularClass;