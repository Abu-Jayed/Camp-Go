import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Provider/AuthProvider";

const useSelectedClass = () => {
    const {user,loading} = useContext(AuthContext)
    const [selectedClass,setSelectedClass] = useState([])
    useEffect(()=>{
        if(!loading){
            fetchClassData()
        }
    },[loading])

    const totalPrice = selectedClass?.reduce((total, item) => parseInt(total) + parseInt(item.price), 0);

    // console.log('useclass',totalPrice);
    const fetchClassData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/class?email=${user?.email}`);
            if (response.ok) {
              const data = await response.json();
              // console.log('res from fetch', data);
              setSelectedClass(data);
            } else {
              throw new Error('Failed to fetch cart data');
            }
          } catch (error) {
            console.error(error);
          }
      };
    return [selectedClass,totalPrice]
};

export default useSelectedClass;