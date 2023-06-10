import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import useSelectedClass from "../../../../hooks/useSelectedClass";

const SelectedClass = () => {
    // const {user,loading} = useContext(AuthContext)
    // const [selectdClass,setSelectedClass] = useState([])
    // useEffect(()=>{
    //     if(!loading){
    //         fetchClassData()
    //     }
    // },[loading])

    // const total = selectdClass.reduce((sum, item) => item.price + sum, 0);

    // const fetchClassData = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:5000/class?email=${user?.email}`);
    //         if (response.ok) {
    //           const data = await response.json();
    //           console.log('res from fetch', data);
    //           setSelectedClass(data);
    //         } else {
    //           throw new Error('Failed to fetch cart data');
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //   };
    
    //   return [selectdClass];

    const [selectdClass,total] = useSelectedClass()
    return (
        <div>
            <div className="flex gap-5">
            <h1 className="text-3xl font-bold">Total Selected Class: {selectdClass.length}</h1>
            <h1 className="text-3xl font-bold">Total Price: {parseFloat(total.toFixed(2))}</h1>
            <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div>

            <div className="flex gap-8">

            {
                    selectdClass.map(fightClass => {
                        return <>

                            <div key={fightClass.classImage}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <a href="" className="p-5 text-blue-400 font-bold">{fightClass.className}</a>
                                    <p className="font-bold text-xl px-5 pt-2">{fightClass.enrolled} Enrolled</p>
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarHalf></BsStarHalf>
                                        <p>{fightClass.rating} <span className="text-violet-500"> ({fightClass.enrolled})</span></p>
                                        <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 ">Details</button>
                                    </div>
                                </div>
                            </div>
                        </>

                    })
                }
            </div>

        </div>
    );
};

export default SelectedClass;