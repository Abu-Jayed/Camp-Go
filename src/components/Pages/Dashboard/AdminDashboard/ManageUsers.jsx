import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    console.log(users);


    const handleRoleUpdate = async (id, newRole) => {
      try {
        // Send the API request to update the status
        await axiosSecure.put(`/users/${id}/role`, { role: newRole });
  
        // Update the status in the local state
      //   setClasses((prevClasses) =>
      //     prevClasses.map((fightClass) => {
      //       if (fightClass._id === id) {
      //         return { ...fightClass, status: newStatus };
      //       }
      //       return fightClass;
      //     })
      //   );
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <div>
            <h1>Manage {users.length} user.</h1>
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
            <button onClick={() => handleRoleUpdate(user._id, 'admin')}>Make Admin</button>
            <button className={`${user.email === "mdabujayed2006@gmail.com"?'btn-disabled':''}`} onClick={() => handleRoleUpdate(user._id, 'teacher')}>Make Teacher</button>
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