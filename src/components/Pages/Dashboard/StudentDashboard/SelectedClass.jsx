import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast"

const SelectedClass = () => {

  const [selectdClass, totalPrice] = useSelectedClass()
  // const [reload,setReload] = useState(true)
  // console.log(totalPrice);
  const navigate = useNavigate();

  /* selected class delete function */
  const handleDelete = (id) => {
    /* swal confirmation start */

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your selectedClass has been removed.", "success");

        console.log('delete from ',id);
        fetch(`http://localhost:5000/selectedClass/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success("Selected Class removed successfully");
              window.location.reload()
            }
          });
      } else {
        Swal.fire({
          position: "top-center",
          icon: "warning",
          title: "selected class is not removed yet!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    /* swal confirmation end */
  };


  return (
    <div>
      <div className="flex gap-5">
        <h1 className="text-3xl font-bold">Total Selected Class: {selectdClass.length}</h1>
        <h1 className="text-3xl font-bold">Total Price: {totalPrice}</h1>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm">PAY</button>
        </Link>
      </div>

      <div className="ml-10 grid grid-cols-2 gap-8">

        {
          selectdClass.map(fightClass => {
            return <>

              <div key={fightClass.classImage}>
                <div className="shadow-md hover:shadow-md hover:shadow-black shadow-gray-600">
                  <img className="mx-auto w-[340px] h-[226px]" src={fightClass.classImage} alt="" />
                  <a href="" className="p-5 text-blue-400 font-bold">{fightClass.className}</a>
                  <p className="font-bold text-2xl ml-5">{fightClass.instructorName}</p>
                  <p className="ml-5 font-semibold text-lg">{fightClass.instructorEmail}</p>
                  <div className="items-center px-4 flex  text-2xl pb-3 text-orange-600 ">
                    <p>Price: {fightClass.price}</p>
                    <button onClick={() => handleDelete(fightClass._id)} className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 ">Delete</button>
                    <button className="text-lg md:ml-5 font-bold p-1 rounded-xl  text-white bg-rose-500 "><Link to={`/dashboard/payment/${fightClass._id}`}>pay</Link> </button>
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