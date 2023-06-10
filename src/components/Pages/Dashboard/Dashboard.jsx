import { useNavigate, useParams } from "react-router-dom";
import useStudent from "../../../hooks/useStudent";
import { useEffect, useState } from "react";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
    const navigate = useNavigate()
    const email = useParams()
    
    const [student, setStudent] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/dashboard/${email.email}`)
            .then(res => res.json())
            .then(data => setStudent(data))
    }, [])
    if(email==='undefined'){
        return navigate('/')
    }
    // console.log(student.role);
    if(student?.role === 'student'){
        return <StudentDashboard student={student}></StudentDashboard>
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