import React from 'react';

const StudentDashboard = ({ student }) => {
    return (
        <div>
            <h1 className='text-4xl'>{student.name}</h1>
            <ul className="bg-rose-500 w-52 h-[100vh]">
                <li className='font-bold text-2xl text-white px-3 py-4'>Selected Class</li>
                <li className='font-bold text-2xl text-white px-3 py-4'>Enrolled Class</li>
            </ul>
        </div>
    );
};

export default StudentDashboard;