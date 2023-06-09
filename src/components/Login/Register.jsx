import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navagate = useNavigate();
    // console.log(user);
    
    const onSubmit = data => {
        const {name,img,email,password,confirmPassword} = data;

        if (password.length < 6) {
            toast.error("password must have 6 charectar")
            return setError('password must have 6 charectar')
        }

        createUser(email, password)
            .then(result => {
                toast.success('user created successfully.')
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                setTimeout(() => navagate('/'), 2000)

                updateUser(name, img)
            })
            .catch(err => {
                // setError(err.message)
                console.log(err.message);
                toast.error(err.message)
            })
        console.log(data);
        // console.log(name);
    };





    return (
        <>
            <div className="text-black md:w-[666px] mx-auto rounded-3xl  p-10 mb-14 mt-14  shadow-inner shadow-red-600">
                <h3 className="text-center text-red-600 text-5xl font-bold tracking-wide mb-10">
                    Register your account
                </h3>
                <hr className="w-96  h-[1px] mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                <form onSubmit={handleSubmit(onSubmit)} className="w-96 mx-auto" >
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-semibold tracking-wider">
                                name
                            </span>
                        </label>
                        <input
                        {...register("name", { required: true })}
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered  border-rose-300 focus:outline-red-600"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-semibold tracking-wider">
                                Image Url
                            </span>
                        </label>
                        <input
                        {...register("img", { required: true })}
                            type="text"
                            name="img"
                            placeholder="Image Url"
                            className="input input-bordered border-rose-300 focus:outline-red-600"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-semibold tracking-wider">
                                Email
                            </span>
                        </label>
                        <input
                        {...register("email", { required: true })}
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered border-rose-300 focus:outline-red-600"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-semibold tracking-wider">
                                Password
                            </span>
                        </label>
                        <input
                        {...register("password", { required: true })}
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered border-rose-300 focus:outline-red-600"
                            required
                        />
                        <label className="label">
                            <span className="text-black font-semibold tracking-wider">
                               Confirm Password
                            </span>
                        </label>
                        <input
                        {...register("confirmPassword", { required: true })}
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm password"
                            className="input input-bordered border-rose-300 focus:outline-red-600"
                            required
                        />
                        
                        <label className="label">
                            <div className="text-rose-500 text-xl font-bold tracking-wide  flex gap-12">
                                <div className="flex">
                                    <p className="mr-1">Have an account?</p>
                                    <Link className="underline text-red-600" to="/login">
                                        {" "}
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="flex gap-4 cursor-pointer mt-4">
                            <input
                                type="checkbox"
                                className="border-2 border-white checkbox"
                            />
                            <span className="text-white">Remember me</span>
                        </label>
                    </div>
                    <div className="w-60 mx-auto form-control mt-6 mb-3">
                        <button className="btn bg-rose-500 hover:bg-rose-600 font-bold text-xl">Register</button>
                    </div>
                </form>
                <h1 className="text-3xl text-center font-semibold uppercase text-red-600">

                    {
                        error
                    }
                </h1>
            </div>
            <Toaster />
        </>
    );
};

export default Register;
