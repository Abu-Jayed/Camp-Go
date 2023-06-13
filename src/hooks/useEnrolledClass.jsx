import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";

const useEnrolledClass = () => {
    const {user,loading} = useContext(AuthContext)
    const [enrolledClass,setEnrolledClass] = useState([])
    useEffect(()=>{
        if(!loading){
            fetchClassData()
        }
    },[loading])

    // const totalPrice = enrolledClass?.reduce((total, item) => parseInt(total) + parseInt(item.price), 0);

    // console.log('useclass',totalPrice);
    const fetchClassData = async () => {
        try {
            const response = await fetch(`https://camp-go-server.vercel.app/enrolledClass?email=${user?.email}`);
            if (response.ok) {
              const data = await response.json();
              // console.log('res from fetch', data);
              setEnrolledClass(data);
            } else {
              throw new Error('Failed to fetch cart data');
            }
          } catch (error) {
            console.error(error);
          }
      };
    return [enrolledClass]
};

export default useEnrolledClass;