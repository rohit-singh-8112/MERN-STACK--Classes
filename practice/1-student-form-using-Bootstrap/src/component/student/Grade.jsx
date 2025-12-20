

const Grade = () => {
    return(
      <div className="m-3">
        <div className="mb-2">
          <label className="form-label text-default">Grade</label>
          <select class="form-select ms-2" aria-label="Default select example">
            <option selected>Select your Grade</option>
            <option value="1">A+</option>
            <option value="2">A</option>
            <option value="3">B+</option>
            <option value="4">B</option>
            <option value="5">C+</option>
            <option value="6">C</option>
            <option value="7">Fail</option>
          </select>
        </div>
      </div>
    );
}
export default Grade;