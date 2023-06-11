import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
    const { user,logOut } = useContext(AuthContext)
    console.log(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
        <Link className="hover:text-orange-600 uppercase font-bold" to='/'>Home</Link>
        <Link className="hover:text-orange-600 uppercase font-bold" to='instructors'> Instructors</Link>
        <Link className="hover:text-orange-600 uppercase font-bold" to='classes'>Classes</Link>
        <Link className="hover:text-orange-600 uppercase font-bold" to={`dashboard`}>Dashboard</Link>
        <Link className="hover:text-orange-600 uppercase font-bold" to='classes'>Contact</Link>
    </>
    return (
        <>
            <div className="navbar bg-[#1d1d1d] text-white rounded-md">
                <div className="navbar-start">
                    <div className="relative">
                        {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label> */}
                        <ul className="menu left-32 absolute text-white top-9 bg-[#1d1d1d] h-36 w-36 rounded-md px-4 menu-horizontal ">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Camp Go</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="  menu menu-horizontal px-1 flex gap-5">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <Link to="/login" className="btn">Login</Link>
                        </>
                    }
                    {/* <Link to='/login' className="btn">Login</Link> */}
                </div>
            </div>
        </>
    );
};

export default NavBar;