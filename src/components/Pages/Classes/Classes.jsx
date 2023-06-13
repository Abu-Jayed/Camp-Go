import { useContext, useEffect, useState } from "react";
// import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Classes = () => {
    const {user} = useContext(AuthContext)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allclasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    console.log('allclasses form classes',classes);
    const handleSelectClass = (classes) => {
        console.log(classes);
        const {availableSeats,classImage,className,enrolled,instructorName,instructorEmail,price,rating,_id} = classes
        // console.log(availableSeats);
        if(!user){
            return Swal.fire({
                position: "top-center",
                icon: "error",
                title: "You Have To Login first",
                showConfirmButton: false,
                timer: 1400,
            });
        }
        if(user){
            const selectedClass = {classId: _id, instructorName, classImage, price, email: user.email,rating,enrolled,className,instructorEmail,availableSeats}
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
        }
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Order confirm successfully",
            showConfirmButton: false,
            timer: 1400,
        });
    }
    const [role,setRole] = useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/checkrole/${user?.email}`)
        .then(res => res.json())
        .then(data => setRole(data))
    },[])

    const userIs = role[0]?.role

    console.log(userIs);
    return (
        <>
            <h1 className="bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-gray-100 text-5xl mt-28 md:w-[420px] text-center mx-auto py-2 cursor-context-menu rounded-2xl ">Top Teacher
        </h1>
            <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 max-w-[1100px] mx-auto md:my-10 gap-10">

                {
                    classes.map(fightClass => {
                        return <>

                            <div key={fightClass.classImage}>
                                <div className={`shadow-md hover:shadow-md hover:shadow-black shadow-gray-600 ${fightClass.availableSeats == 0 ? 'shadow-red-700 bg-red-100  hover:shadow-red-500 hover:shadow-lg' : ''}`}>
                                    <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                                    <a href="" className="p-5 text-blue-400 font-bold">{fightClass.className}</a>
                                    <div className="gap-2 flex items-end">
                                        <p className="font-bold text-xl px-5 pt-2">{fightClass.instructorName}</p>
                                        <p>{fightClass.availableSeats}  sit available</p>
                                        <p>${fightClass.price}</p>
                                    </div>
                                    <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                                        {/* <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarFill></BsStarFill>
                                        <BsStarHalf></BsStarHalf>
                                        <p>{fightClass.rating} <span className="text-violet-500"> ({fightClass.enrolled})</span></p> */}
                                        <button onClick={()=>handleSelectClass(fightClass)} className={`text-lg md:ml-5 font-bold p-1 rounded-xl  text-white btn-warning ${fightClass.availableSeats == 0 ? ' bg-red-300 shadow-lg shadow-red-500 btn-disabled text-red-700 cursor-not-allowed' : ''} ${userIs === 'admin'?'bg-red-300 shadow-lg shadow-red-500 text-green-700 btn-disabled cursor-not-allowed':''} ${userIs === 'teacher'?'bg-red-300 shadow-lg shadow-red-500 text-yellow-600 btn-disabled cursor-not-allowed':''} `}>select</button>
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

export default Classes;