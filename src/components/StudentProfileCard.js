import React from 'react';

const StudentProfileCard = ({student}) => {
    const date = new Date();

        /*********************************************
       * graduationCountDown
       * returns: JSX 
       * Behaviour: Calculates the year of Graduation Date
       **********************************************/

    const graduationCountDown = () =>{
         const yearsRemaining = student.cohort - date.getFullYear()
        if(yearsRemaining >0){
            return <div> { yearsRemaining} year(s) till {student.cohort } Graduation </div>
        }else{
            return <div> {student.cohort} Graduate </div>
        }
    }

   
    return(
        <div className="card">
            <div  style={{display: "flex", justifyContent: "space-around", color:'white', backgroundColor:"magenta"}}>
               <div>Student Name:{student.lastName +", " + student.firstName}</div>
               <div>{student.schoolName} {student.district}  </div>
               <div>{student.schoolId} </div>
            </div>
            <div  style={{display: "flex", justifyContent: "space-between"}}>
                 <div>{Math.floor(student.attendancePercentage) + '% attendance'}</div>
                 <div>Grade: {student.grade} </div>
                 <div>Credits: {student.totalCreditsEarned}</div>
                 <div>Phone Number: {student.homePhoneNumber}</div>
                 <div>Advisor:  {student.advisor}</div>
                 {graduationCountDown()}
            </div>
        </div>
    );
}

export default StudentProfileCard;
