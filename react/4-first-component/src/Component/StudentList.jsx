const StudentList = (props) => {

  
  if(!props.students){
    return <p>No Students</p>
  }
  return (<ol>
    {props.students.map((student) => <li key={student} >{student}</li>)}
  </ol>
  )

}
export default StudentList;