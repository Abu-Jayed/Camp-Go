import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import useStudent from "../../../hooks/useStudent";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

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
            <h1 className='text-4xl'>{users.name}</h1>
            <div className="flex gap-3">
                <div>
                    <ul className="bg-rose-500 w-52 h-[100vh]">
                        <li className='font-bold text-2xl text-white px-3 py-4'><NavLink to='/dashboard/selectedClass'>Selected Class</NavLink> </li>
                        <li className='font-bold text-2xl text-white px-3 py-4'><NavLink to='/dashboard/enrolledClass'>Enrolled Class</NavLink> </li>
                    </ul>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    }else if(users?.role === 'teacher'){
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
    return (
        <>
            <div>
                <div>
                    <ul className="bg-rose-500 w-52 h-[100vh]">
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                        <li>hoeme</li>
                    </ul>
                </div>

            </div>

        </>
    );
};

export default Dashboard;