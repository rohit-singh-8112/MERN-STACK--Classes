
import './App.css'
import Heading from './Component/heading.jsx'
import Button from './Component/button.jsx'
import DynamicComponent from './Component/DynamicComponent.jsx' 
import Paragraph from './Component/paragraph.jsx' 
import StudentList from './Component/StudentList.jsx'
import { onclickHandler, deleteHandler, sendHandler } from './Component/click.jsx'

function App() {
 const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
  const NewStudents = ['Kevin', 'Laura', 'Mallory', 'Niaj', 'Olivia'];
  console.log(students);
  console.log(NewStudents);   
 

  return (
    <>
      <Heading />
      <Paragraph />
      <StudentList  students={students}/>
      <Button type={'primary'} btnText={'Click Me'} Handlar={onclickHandler}/>
      <Button type={'secondary'} btnText={'Delete'} Handlar={deleteHandler}/>
      <Button btnText={'Send'} Handlar={sendHandler}/>
      <DynamicComponent />   
      <StudentList students={NewStudents} />
      
    </>
  )
}

export default App
