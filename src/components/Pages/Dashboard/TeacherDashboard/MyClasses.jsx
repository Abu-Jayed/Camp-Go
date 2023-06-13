import { BsStarFill, BsStarHalf } from "react-icons/bs";
import useTeacherClass from "../../../../hooks/useTeacherClass";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const [myClass, total] = useTeacherClass()
    console.log(myClass);
    return (
        <div>
            <div className="flex gap-5">
                <h1 className="text-3xl font-bold">{myClass.length} Class You Added</h1>
            </div>
            <div className="grid grid-cols-2 gap-8">

                {
                    myClass.map(fightClass => {
                        const modalId = `my_modal_${fightClass._id}`
                        return <>

                            <div key={fightClass._id}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <a href="" className="p-5 text-blue-400 font-bold">{fightClass.className}</a>
                                    <p className="font-bold text-xl px-5 pt-2">{fightClass.status}</p>
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        <p>Enrolled: {fightClass.enrolled}</p>
                                        <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 ">Update</button>


                                        {/* feedback */}


                        {/* modal start here */}
                        {
                            fightClass.status === 'denied' ? <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500" onClick={()=>window[modalId].showModal()}>FeedBack</button>: ''
                        }
{/* <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500" onClick={()=>window[modalId].showModal()}>FeedBack</button> */}
<dialog id={modalId} className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Feedback from admin for "{fightClass.className}"</h3>
    <p className="py-4">{fightClass.feedback}</p>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
{/* modal end here */}
                                        {
                                            console.log('myclassess', fightClass)
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