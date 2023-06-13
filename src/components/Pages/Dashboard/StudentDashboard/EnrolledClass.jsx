import { Link } from "react-router-dom";
import useEnrolledClass from "../../../../hooks/useEnrolledClass";

const EnrolledClass = () => {
    const [enrolledClass] = useEnrolledClass()
    console.log('enrolled class',enrolledClass);
    return (
        <div>
            <div className="flex gap-5">
                <h1 className="text-3xl font-bold mb-6">Total Enrolled Class: {enrolledClass.length}</h1>
            </div>

            <div className="ml-10 grid grid-cols-2 gap-8">

                {
                    enrolledClass.map(fightClass => {
                        return <>

                            <div key={fightClass.classId}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.foundItem.classImage} alt="" />
                                    <div className="flex items-center">

                                    <a href="" className="p-5 text-2xl hover:text-blue-600 hover:underline  font-bold duration-300">{fightClass.foundItem.className}</a>
                                    <p>
                                    Teacher: <span className="text-blue-600 cursor-pointer hover:underline">{fightClass.foundItem.instructorName }</span>
                                    </p>
                                    </div>
                                    {/* <p className="font-bold text-xl px-5 pt-2">{fightClass.enrolled} Enrolled</p> */}
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        {/* <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarHalf></BsStarHalf>
                                        <p>{fightClass.rating} <span className="text-violet-500"> ({fightClass.enrolled})</span></p> */}
                                        <p>Price: {fightClass.foundItem.price}</p>
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

export default EnrolledClass;