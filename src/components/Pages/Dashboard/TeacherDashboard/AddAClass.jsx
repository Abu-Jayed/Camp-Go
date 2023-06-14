import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext)
    const onSubmit = data => {
        const { className, classImage, instructorName,instructorEmail,availableSeats,price } = data;
        console.log(data);
        const newClasses = {className,classImage,instructorEmail,instructorName,availableSeats: parseInt(availableSeats),price,rating: 0, enrolled: 0, status: 'pending',instructorImage: user.photoURL}
        console.log('new class',newClasses);
        axiosSecure.post('/class', newClasses)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        // reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class submited for approved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
    };
    return (
        <div>
            <h1 className="bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-gray-100 text-5xl mt-28 md:w-[420px] text-center mx-auto py-2 cursor-context-menu rounded-2xl ">Add new class
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <label className="input-group">
                        <input {...register("className", { required: true })} type="text" placeholder="class name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <label className="input-group">
                        <input {...register("classImage", { required: true })} type="text" placeholder="class image" className="input input-bordered" />
                    </label>
                </div>
                {/* read only input field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Teacher Name</span>
                    </label>
                    <label className="input-group">
                        <input value={user.displayName} {...register("instructorName", { required: true })} type="text" placeholder="class image" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Teacher Email</span>
                    </label>
                    <label className="input-group">
                        <input {...register("instructorEmail", { required: true })} value={user.email} type="text" placeholder="class image" className="input input-bordered" />
                    </label>
                </div>
                {/* read only input field */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seats</span>
                    </label>
                    <label className="input-group">
                        <input {...register("availableSeats", { required: true })} type="number" placeholder="seats" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input {...register("price", { required: true })} type="number" placeholder="price" className="input input-bordered" />
                    </label>
                </div>

                {/* submit button */}
                <div className="w-60 mx-auto form-control mt-6 mb-3">
                        <button className="bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 from-indigo-500 via-purple-500 to-pink-500 font-bold text-gray-100 md:w-[160px] text-xl text-center cursor-context-menu rounded-md">Add Class</button>
                    </div>
            </form>
        </div>
    );
};

export default AddAClass;