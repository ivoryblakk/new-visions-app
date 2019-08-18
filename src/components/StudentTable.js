import React from 'react';
import StudentProfile from './StudentProfileCard'
const NOT_IN_RANGE_MESSAGE= 'There are no students that meet the criteria'

const StudentTable =({students, loading, setStudentCard, attendanceThreshold }) =>{
    if (loading) {
        return <h2>Loading...</h2>;
      }

      let nullArray = new Array(students.length).fill(null);
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
       * compareTableWithNullArray
       * returns: Boolean
       * Behavior: Checks if the all the items in
       * the function draw table were set to "null"
       **********************************************/

      const compareTableWithNullArray = () =>{
        let table = drawTable()
        for( let i = 0; i < table.length; i++){
          if(table[i] !== nullArray[i]){
            return true
          } 
        }
        return false
      }
       /*********************************************
       * compareTableWithNullArray
       * returns: Boolean
       * Behavior: Checks if the all the items in
       * the function draw table were set to "null"
       **********************************************/

      const drawTable = ()=>{
      const table = students.map(student => {
          if( Math.floor(student.attendancePercentage) <= attendanceThreshold ){
            return( <li key={student.studentId} className='list-group-item' style={{display:'flex',justifyContent:"space-between", textAlign:"center" }}>
            <div>{Math.floor(student.attendancePercentage) + '%'}  </div>
            <div>{linkNameToEmail({ name: `${student.lastName}, ${student.firstName}`}, student.email ) } </div>
            <div>{student.studentId}</div>
            <div>{linkNameToEmail({name:student.guidanceCounselor}, student.guidanceCounselorEmail) }</div>
            <div><button onClick={()=> viewProfile(student)} >View Profile</button></div>
          </li>);
          }else { return null }
      })
      return table;
      }
    
      return (
        <div  style={{overflowX:'hidden', overflowY: "scroll", height:"60vh"}} >
            <ul className='list-group mb-4'>
              {!compareTableWithNullArray() ? <h2>{NOT_IN_RANGE_MESSAGE} </h2>: drawTable() }
            </ul>
        </div>
      );
    
}

export default  StudentTable;