import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://camp-go-server.vercel.app/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users);


    const handleRoleUpdate = async (id, newRole) => {
      try {
        // Send the API request to update the status
        await axiosSecure.put(`/users/${id}/role`, { role: newRole });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Role Changed",
          showConfirmButton: false,
          timer: 1400,
      });
        // Update the status in the local state
        setUsers((users) =>
          users.map((fightClass) => {
            if (fightClass._id === id) {
              return { ...fightClass, role: newRole };
            }
            return fightClass;
          })
        );
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <div>
            <h1 className="text-4xl ">Manage {users.length} user.</h1>
            <div className="overflow-x-auto">
            <table className="mx-auto w-full table border-4">
    {/* head */}
    <thead>
      <tr >
        <th className="text-lg">Image</th>
        <th className="text-lg">Name</th>
        <th className="text-lg">Email</th>
        {/* <th className="text-lg">Role</th> */}
        <th className="text-lg">Action</th>
        {/* <th className="text-lg"></th> */}
      </tr>
    </thead>
    <tbody className="w-96">
      {
        users.map(user =>{
          return <tr key={user._id}>
          
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img className="w-1/3" src={user.img} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              
            </div>
          </td>
          <td>
            {user.name}
          </td>
          <td>
          <div>
                <div className="font-bold">{user.email}</div>
                <div className="text-sm opacity-50">{user.role}</div>
              </div>
          </td>
          <td>
            <div className="flex gap-3">
            <button className={`${user.role === 'admin'?'btn-disabled':''}`} onClick={() => handleRoleUpdate(user._id, 'admin')}>Make Admin</button>
            <button className={`${user.email === "mdabujayed2006@gmail.com"?'btn-disabled':''} ${user.email === "abujayed@campgo.com"?'btn-disabled':''} ${user.role==='teacher'?'btn-disabled':''}`} onClick={() => handleRoleUpdate(user._id, 'teacher')}>Make Teacher</button>
            </div>
          </td>
        </tr>
        })
      }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;