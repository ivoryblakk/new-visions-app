import React , { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import StudentTable from './components/StudentTable'
import StudentTableHeader from './components/StudentTableHeader'
let attendanceThreshold = 100;


function App() { 
  const [ students, setStudents] = useState('');
  const [ studentCard, setStudentCard] = useState("Click View Profile to see students Full profile");
  const [loading, setLoading ] = useState(true)
  const [threshold,setThreshold] = useState(100)
 
  const getStudentData = ()=>{
    axios
    .get('db.json')
      .then(response=> {
        console.log('success loading Database')
        setStudents(response.data)
        setLoading(false)
      }).catch(err => console.log(err))
  }

  useEffect(getStudentData, [])

  /**********************************
   * handleAttendanceThreshold
   * 
   * Behavior: gets user inputs to filter
   * the Attendance threshold
   * 
   **********************************/
  const handleAttendanceThreshold = (event) => {
   if (!Number(event.target.value)){
      attendanceThreshold = 100;
      setThreshold(attendanceThreshold)
     return
   }
   if(event.target.value !==''){
      attendanceThreshold = Number(event.target.value);
      setThreshold(attendanceThreshold)
    } 
  }

  return (
    <div className="App">
        <Header />
        <div className="wrapper" style={{display: "grid", gridTemplateColumns: "20% 80%"}}>
            <div className="sidebar"> Set Attendance Threshold: <input  style={{width: "150px"}} onChange={handleAttendanceThreshold} placeholder="Enter a Number"/>%   </div>
            <div className="main" >
                <div className="studentCardWrapper" style={{flex:"1"}}> 
                    {studentCard}  
                  <StudentTableHeader />
                </div>
                <StudentTable students={students} loading={loading} setStudentCard={setStudentCard} attendanceThreshold={attendanceThreshold}/>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
