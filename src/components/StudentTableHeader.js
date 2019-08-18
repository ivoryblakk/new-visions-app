import React from 'react';


const StudentTableHeader = () => {
    return(
        <div style={{display:'flex', justifyContent: "space-between", backgroundColor: "navy", color: "white"}}> 
            <div>Attendance  </div>
            <div>Student Name </div>
            <div>Student Id #</div>                
            <div>Guidance Counselor </div>
            <div></div>
        </div>
    );
}



export default StudentTableHeader;