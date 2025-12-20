import AppName from './student/AppName'
import TextInput from './student/TextInput'
import Grade from './student/Grade'
import Gender from './student/Gender'
import Terms from './student/Terms'
import Button from './student/Button'

const StudentForm = () => {
  return(
    <>
      <div className="w-50">
        <AppName />
        <TextInput />
        <Grade />
        <Gender />
        <Terms />
        <Button />
      </div>
    </>
  );
}
export default StudentForm;