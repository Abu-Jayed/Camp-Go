import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaMoon } from "react-icons/fa";
import useConditionalChangeTheme from "../../hooks/useConditionalChangeTheme";

const NavBar = () => {
    const { user,logOut } = useContext(AuthContext)
    // console.log(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
      };

      useConditionalChangeTheme(darkTheme ? 'dark' : 'light');

    const navOptions = <>
        <Link className="hover:text-yellow-400 uppercase font-bold" to='/'>Home</Link>
        <Link className="hover:text-yellow-400 uppercase font-bold" to='instructors'> Instructors</Link>
        <Link className="hover:text-yellow-400 uppercase font-bold" to='classes'>Classes</Link>
        <Link className="hover:text-yellow-400 uppercase font-bold" to={`dashboard`}>Dashboard</Link>
        <Link className="hover:text-yellow-400 uppercase font-bold" to='contact'>Contact</Link>
        <p className="cursor-pointer" onClick={toggleTheme}><FaMoon></FaMoon> </p>

    </>
    return (
        <>
            <div className="navbar bg-[#1d1d1d] text-white rounded-md">
                <div className="navbar-start">
                    <div className="relative">
                        <ul className="md:invisible menu left-32 absolute text-white top-9 bg-[#1d1d1d] h-36 w-36 rounded-md px-4 menu-horizontal ">
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
                    <img title={user?.displayName} src={user?.photoURL} className="w-10 rounded-full" alt="" />
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