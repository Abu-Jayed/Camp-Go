import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";

const useSelectedClass = () => {
    const {user,loading} = useContext(AuthContext)
    const [selectdClass,setSelectedClass] = useState([])
    useEffect(()=>{
        if(!loading){
            fetchClassData()
        }
    },[loading])

    const total = selectdClass.reduce((sum, item) => item.price + sum, 0);

    const fetchClassData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/class?email=${user?.email}`);
            if (response.ok) {
              const data = await response.json();
              console.log('res from fetch', data);
              setSelectedClass(data);
            } else {
              throw new Error('Failed to fetch cart data');
            }
          } catch (error) {
            console.error(error);
          }
      };
    return [selectdClass,total]
};

export default useSelectedClass;