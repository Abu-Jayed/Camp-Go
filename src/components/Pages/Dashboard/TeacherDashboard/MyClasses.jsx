import { BsStarFill, BsStarHalf } from "react-icons/bs";
import useTeacherClass from "../../../../hooks/useTeacherClass";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [myClass,total] = useTeacherClass()
    console.log(myClass);
    return (
        <div>
            <div className="flex gap-5">
            <h1 className="text-3xl font-bold">{myClass.length} Class You Added</h1>
            </div>
            <div className="grid grid-cols-2 gap-8">

            {
                    myClass.map(fightClass => {
                        return <>

                            <div key={fightClass.classImage}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <a href="" className="p-5 text-blue-400 font-bold">{fightClass.className}</a>
                                    <p className="font-bold text-xl px-5 pt-2">{fightClass.status}</p>
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        {/* <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarHalf></BsStarHalf> */}
                                        {/* <p>{fightClass.rating} <span className="text-violet-500"> ({fightClass.enrolled})</span></p> */}
                                        <p>Enrolled: {fightClass.enrolled}</p>
                                        <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 ">Update</button>
                                        <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 ">Feedback</button>
                                        {
                                            console.log('myclassess',fightClass)
                                        }
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

export default MyClasses;