import { useContext, useEffect, useState } from "react";
import useEnrolledClass from "../../../../hooks/useEnrolledClass";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaArrowRight, FaCartPlus, FaCheckCircle } from "react-icons/fa";

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [history,setHistory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/paymentHistory?email=${user.email}`)
            .then(res => res.json())
            .then(data => setHistory(data))
    }, [])
    // const [enrolledClass] = useEnrolledClass()
    // console.log('from payment history',history);
    return (
        <div>
            <h1 className="text-4xl">You've purchase {history?.length} Class</h1>
            <div className="ml-10 grid grid-cols-2 gap-8">

        {
          history?.map(fightClass => {
            return <>
    {console.log('single data form payment',fightClass)}
              <div key={fightClass._id}>
                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                  <img className="mx-auto w-[340px] h-[226px]" src={fightClass?.foundItem?.classImage} alt="" />
                  <a href="" className="p-5 text-blue-400 font-bold">{fightClass.foundItem.className}</a>
                  <p className="font-bold text-2xl ml-5">{fightClass.foundItem.instructorName}</p>
                  <p className="ml-5 font-semibold text-lg">{fightClass.foundItem.instructorEmail}</p>
                  <div className="items-center px-4 flex gap-24 text-2xl pb-3 ">
                    <p>Price: {fightClass.foundItem.price}</p>
                    <p className="text-green-700 flex gap-2"><FaCartPlus></FaCartPlus> <FaCheckCircle></FaCheckCircle> </p>
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

export default PaymentHistory;