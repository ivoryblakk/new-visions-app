import React from 'react';
import StudentProfile from './StudentProfileCard'
const NOT_IN_RANGE_MESSAGE= 'There are no students that meet the criteria'

const StudentTable =({students, loading, setStudentCard, attendanceThreshold }) =>{
    if (loading) {
        return <h2>Loading...</h2>;
      }

      /*********************************************
       * linkNameToEmail
       * arg1: Object
       * arg2: string
       * returns: an a tag email with email address and
       * person name as text
       **********************************************/
      const linkNameToEmail =(person={}, email='') =>{
          const address = 'mailto:'+email;
            return (<a href={address}> {person.name}</a>)
      }
      

      const viewProfile = (student)=>{
          setStudentCard( <StudentProfile student={student} />)
      }
      
       /*********************************************
       * fiterdStudents
       * returns: filter the students that are above the 
       * threshold
       **********************************************/

      const fiterdStudents =() => {
        return students.filter(student =>{
         return Math.floor(student.attendancePercentage) <= attendanceThreshold
        })
      }

       /*********************************************
       * drawTable
       * returns: JSX list of students
       **********************************************/

      const drawTable = ()=>{
      const table = fiterdStudents().map(student => {
            return( <li key={student.studentId} className='list-group-item' style={{display:'flex',justifyContent:"space-between", textAlign:"center" }}>
            <div>{Math.floor(student.attendancePercentage) + '%'}  </div>
            <div>{linkNameToEmail({ name: `${student.lastName}, ${student.firstName}`}, student.email ) } </div>
            <div>{student.studentId}</div>
            <div>{linkNameToEmail({name:student.guidanceCounselor}, student.guidanceCounselorEmail) }</div>
            <div><button onClick={()=> viewProfile(student)} >View Profile</button></div>
          </li>);
      })
      return table;
      }
    
      return (
        <div  style={{overflowX:'hidden', overflowY: "scroll", height:"60vh"}} >
            <ul className='list-group mb-4'>
              { drawTable().length >0? drawTable():<h2> {NOT_IN_RANGE_MESSAGE} </h2>}
            </ul>
        </div>
      );
    
}

export default  StudentTable;