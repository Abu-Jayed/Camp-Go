import React from 'react';

const StudentDashboard = ({student}) => {
    return (
        <div>
            <h1 className='text-4xl'>{student.name}</h1>
        </div>
    );
};

export default StudentDashboard;