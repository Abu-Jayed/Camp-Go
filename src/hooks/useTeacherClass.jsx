import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";

const useTeacherClass = () => {
    const {user,loading} = useContext(AuthContext)
    const [myClass,setMyClass] = useState([])
    useEffect(()=>{
        if(!loading){
            fetchClassData()
        }
    },[loading])

    const total = myClass.reduce((sum, item) => item.price + sum, 0);

    const fetchClassData = async () => {
        try {
            const response = await fetch(`https://camp-go-server.vercel.app/teacherclass?email=${user?.email}`);
            if (response.ok) {
              const data = await response.json();
              console.log('res from fetch', data);
              setMyClass(data);
            } else {
              throw new Error('Failed to fetch cart data');
            }
          } catch (error) {
            console.error(error);
          }
      };
    return [myClass,total]
};

export default useTeacherClass;