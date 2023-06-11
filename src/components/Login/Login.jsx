import { Link, useLocation, useNavigate } from "react-router-dom";
import {  FaEye, FaGoogle, FaRegEye } from "react-icons/fa";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Toaster, toast } from "react-hot-toast";
import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { app } from "../../firebase/firebase.config";

const auth = getAuth(app)

const Login = () => {

  const { loginUser,user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/' ;

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()


    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        toast.success("user logged in successfully");
        console.log(user);


        setTimeout(()=>{
          if(from){
              navigate('/')
              // console.log(user);
          }
          else{
              navigate('/')
              // console.log(user);
              console.log("inside navigate home",from);
          }
      },2000)
      
        // navigate(from,{replace:true})
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });



  };

  /* login with google */
  const handleGoogleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("sign in with google successfully");
        // console.log(result.user);
        setError("");
        // console.log(from);
        // console.log(user);
        navigate(from)
        // redirect(from)

      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  };

  const [show,setShow] = useState(false)
  const handleShowPass = () =>{
    setShow(!show)
  }

  return (
    <>
      <div className="text-black md:w-[666px] mx-auto rounded-3xl  p-10 mb-14 mt-14  shadow-inner shadow-yellow-600">
        <h3 className="text-center text-[#dfa100] text-5xl font-bold tracking-wide mb-10">
          Login to your account
        </h3>
        <hr className="w-96  h-[1px] mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <div className="mt-12 flex justify-around gap-1 ">
          <button onClick={handleGoogleLogin} className="shadow-md bg-slate-200 btn hover:bg-[#dfa100] transition duration-700 hover:outline-red-600 text-[#dfa100] font-bold">
            <FaGoogle className="w-10 h-10"></FaGoogle> &nbsp; Login with google
          </button>
        </div>
        <form onSubmit={handleLogin} className="w-96 mx-auto">
          <div className="form-control">
          <label className="label">
                <span className="text-black font-semibold tracking-wider">
                  email
                </span>
              </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input border-rose-300 input-bordered shadow-md shadow-gray-500 focus:outline-gray-600"
              required
            />
          </div>
          <div className="form-control">

            <label className="label">
              <span className="text-gray-800 font-semibold tracking-wider">
                Password
              </span>
            </label>
            <div className="flex items-center gap-2">
            <input
              type={`${show?'text':'password'}`}
              name="password"
              placeholder="password"
              className="input border-rose-300 input-bordered shadow-md shadow-gray-500 focus:outline-gray-600"
              required
              />
              <div onClick={handleShowPass} className="hover:cursor-pointer">
              {
                show ? <FaEye className="w-12"></FaEye> : <BsFillEyeSlashFill className="w-12"></BsFillEyeSlashFill>
              }
              </div>
              </div>
            <label className="label">
              <div className="hover:text-[#dfa000d8] text-[#dfa100] tracking-wide  flex gap-12">
                <div>
                  <Link className="hover:text-red-500 underline font-semibold  ">Forgot password?</Link>
                </div>
                <div className="flex">
                  <p className="mr-1 font-bold font-serif">New user?</p>
                  <Link className="hover:text-red-500 underline font-semibold  " to="/register">
                    {" "}
                    Register
                  </Link>
                </div>
              </div>
            </label>
          </div>
          <div className="w-60 mx-auto form-control mt-6 mb-3">
          <button className="btn text-yellow-500 bg-slate-200 hover:text-[#dfa100] font-bold text-xl">Login</button>
          </div>
        </form>
        <h1 className="text-3xl text-center font-semibold uppercase text-red-600">

        {
          error
        }
        </h1>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default Login;
