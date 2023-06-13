import { useEffect, useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('https://camp-go-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log(classes);
    // const { className, classImage, instructorName, instructorEmail, availableSeats, price, enrolled, rating, status, _id } = classes

    
    
    const handleStatusUpdate = async (id, newStatus) => {
        try {
          // Send the API request to update the status
          //   toast.success('class managed successfully')
          Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Class Status updated",
              showConfirmButton: false,
              timer: 1400,
            });
            await axiosSecure.put(`/classes/${id}/status`, { status: newStatus });
    
          // Update the status in the local state
          setClasses( (classes) =>
            classes.map((fightClass) => {
              if (fightClass._id === id) {
                return { ...fightClass, status: newStatus };
              }
              return fightClass;
            })
          );
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <>
            <h1 className=" text-5xl font-bold bg-rose-200 hover:bg-rose-500 rounded-2xl mx-auto py-4 md:w-[500px] hover:text-white hover:rotate-2 ease-in duration-300 text-center mt-28 text-gray-800 mb-5">All Added Classes

            </h1>
            <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-10">

                {
                    classes.map(fightClass => {
                        return <>

                            <div key={fightClass.classImage}>
                                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <a href="" className="p-5 text-blue-400 font-bold">{fightClass.className}</a>
                                    <p className="font-bold text-xl px-5 pt-2">{fightClass.enrolled} Enrolled</p>
                                    <div className='font-bold ml-4'>
                                    <h1>Name: <span className='uppercase'>{fightClass.instructorName}</span> </h1>
                                    <h1>{fightClass.instructorEmail}</h1>
                                    </div>
                                    <div className='ml-5 flex gap-5'>
                                        <p>Price: {fightClass.price}</p>
                                        <p>Price: {fightClass.availableSeats}</p>
                                    </div>
                                    <div className="items-center px-4   text-xl pb-3 text-orange-600 ">
                                        <p>Status: {fightClass.status}</p>
                                        <button onClick={() => handleStatusUpdate(fightClass._id, 'denied')} className={` md:ml-5  rounded ${fightClass?.status === "approved" ? 'btn-disabled bg-slate-300': ''}
                                        ${fightClass?.status === "denied" ? 'btn-disabled bg-red-200': ''} text-white bg-rose-500 
                                        `}>Denied</button>
                                        <button onClick={() => handleStatusUpdate(fightClass._id, 'approved')} className={` md:ml-5   ${fightClass?.status === "approved" ? 'btn-disabled bg-green-300': ''} ${fightClass?.status === "denied" ? 'btn-disabled bg-slate-300': ''}    text-white bg-rose-500 `} >Approved</button>
                                        <button className={` md:ml-5 font-bold rounded text-white bg-rose-500 ${fightClass?.status === "approved" ? 'btn-disabled bg-slate-300': ''} ${fightClass?.status === "denied" ? ' bg-red-300': ''}`}>
                                         <Link to={`/dashboard/sendFeedback/${fightClass._id}`}> Send Feedback</Link></button>
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

export default ManageClasses;