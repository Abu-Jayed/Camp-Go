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
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
    };
    return (
        <div>
            add a class <button className='btn btn-info'>Add class</button>
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
                        <button className="btn bg-rose-500 hover:bg-rose-600 font-bold text-xl">Add Class</button>
                    </div>
            </form>
        </div>
    );
};

export default AddAClass;