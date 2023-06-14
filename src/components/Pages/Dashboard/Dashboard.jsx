import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import useStudent from "../../../hooks/useStudent";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHistory, FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillCartCheckFill, BsPeople, BsPeopleFill } from "react-icons/bs";

const Dashboard = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    
    const [users, setUsers] = useState()
    console.log('user form dashboard', users);
    useEffect(() => {
        fetch(`https://camp-go-server.vercel.app/dashboard/${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    // console.log(student.role);

    if (users?.role === 'student') {
        return <div>
            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center font-bold text-gray-100 py-3 text-4xl'>Welcome {users.name}, Explore DashBoard!</h1>
            <div className="flex gap-3">
                <div>
                    <div className=" bg-indigo-400 w-64 h-[100vh]">
                        <div className="pt-12"></div>
                        <div className="flex items-center rounded-lg bg-blue-600">
                            <SiGoogleclassroom className=" ml-2 text-white w-8 h-8"></SiGoogleclassroom>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/dashboard/selectedClass'> Selected Class</Link>
                        </div>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            {/* <FaHome className=" ml-2 text-white w-8 h-8"></FaHome> */}
                            <BsFillCartCheckFill className=" ml-2 text-white w-8 h-8"></BsFillCartCheckFill>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/dashboard/enrolledClass'> Enrolled Classes</Link>
                        </div>
                        
                        <Link to='/dashboard/payment-history'>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            <FaHistory className=" ml-2 text-white w-8 h-8"></FaHistory>
                            <p className='p-2 bg-blue-600  font-bold pt text-2xl text-white' >Payment History</p>
                        </div>
                        </Link>
                        <Link to='/'>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            <FaHome className=" ml-2 text-white w-8 h-8"></FaHome>
                            <p className='p-2 bg-blue-600  font-bold pt text-2xl text-white' >Home</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    } else if (users?.role === 'teacher') {
        return <div>
            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center font-bold text-gray-100 py-3 text-4xl'>Welcome {users.name}, Explore DashBoard!</h1>
            <div className="flex gap-3">
                <div>
                    <div className=" bg-indigo-400 w-64 h-[100vh]">
                        <div className="pt-12"></div>
                        <div className="flex items-center rounded-lg bg-blue-600">
                            <SiGoogleclassroom className=" ml-2 text-white w-8 h-8"></SiGoogleclassroom>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/dashboard/addaclass'>Add a class</Link>
                        </div>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            {/* <FaHome className=" ml-2 text-white w-8 h-8"></FaHome> */}
                            <BsFillCartCheckFill className=" ml-2 text-white w-8 h-8"></BsFillCartCheckFill>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/dashboard/myclasses'> My classes</Link>
                        </div>
                        <Link to='/'>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            <FaHome className=" ml-2 text-white w-8 h-8"></FaHome>
                            <p className='p-2 bg-blue-600  font-bold pt text-2xl text-white'>Home</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    }else if(users?.role === 'admin'){
        return <div className="">
            <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center font-bold text-gray-100 py-3 text-4xl'>Welcome {users.name}, Explore DashBoard!</h1>
            <div className="flex gap-3">
                <div className="">
                    <div className=" bg-indigo-400 w-64 h-[100vh]">
                        <div className="pt-12"></div>
                        <div className="flex items-center rounded-lg bg-blue-600">
                            <SiGoogleclassroom className=" ml-2 text-white w-8 h-8"></SiGoogleclassroom>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/dashboard/manageClasses'>Manage Classes</Link>
                        </div>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            {/* <FaHome className=" ml-2 text-white w-8 h-8"></FaHome> */}
                            <BsPeopleFill className=" ml-2 text-white w-8 h-8"></BsPeopleFill>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/dashboard/manageUsers'> Manage Users</Link>
                        </div>
                        <Link to='/'>
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            <FaHome className=" ml-2 text-white w-8 h-8"></FaHome>
                            <p className='p-2 bg-blue-600  font-bold pt text-2xl text-white'>Home</p>
                        </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    }
        
};

export default Dashboard;