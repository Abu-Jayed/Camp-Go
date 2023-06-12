import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import useStudent from "../../../hooks/useStudent";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BsFillCartCheckFill } from "react-icons/bs";

const Dashboard = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    console.log('user form dashboard', user);

    const [users, setUsers] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    // console.log(student.role);
    if (users?.role === 'student') {
        return <div>
            <h1 className='bg-rose-400 text-center font-bold py-3 text-4xl'>Welcome {users.name}, Explore DashBoard</h1>
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
                        <div className="mt-2 flex items-center rounded-lg bg-blue-600">
                            <FaHome className=" ml-2 text-white w-8 h-8"></FaHome>
                            <Link className='p-2 bg-blue-600  font-bold pt text-2xl text-white' to='/'>Home</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    } else if (users?.role === 'teacher') {
        return <div>
            <h1 className='text-4xl'>Your teacher name is {users.name}</h1>
            <div className="flex gap-3">
                <div>
                    <ul className="bg-rose-500 w-52 h-[100vh]">
                        <li className='font-bold text-2xl text-white px-3 py-4'><NavLink to='/dashboard/addaclass'>Add a class</NavLink> </li>
                        <li className='font-bold text-2xl text-white px-3 py-4'><NavLink to='/dashboard/myclasses'>My classes</NavLink> </li>
                    </ul>
                </div>
                <h1></h1>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    }
    return <div>
        <h1 className='text-4xl'>Your teacher name is {users?.name}</h1>
        <div className="flex gap-3">
            <div>
                <ul className="bg-rose-500 w-60 h-[100vh]">
                    <li className='font-bold text-2xl text-white px-3 py-4'><NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink> </li>
                    <li className='font-bold text-2xl text-white px-3 py-4'><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink> </li>
                </ul>
            </div>
            <h1></h1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
};

export default Dashboard;