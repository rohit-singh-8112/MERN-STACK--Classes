
const Gender = () => {
  return(
    <div className="ms-3 mb-2">
      <label className="form-label text-default">Gender</label>
          <div className="">
            <input type="radio" className="ms-2 form-check-input" name="radioDefault" id="radioDefault1" />
            <label className="form-check-label ms-2" for="checkDefault">Male</label>
          </div>
          <div className="">
            <input type="radio" className="ms-2 form-check-input" name="radioDefault" id="radioDefault2" />
            <label className="form-check-label ms-2" for="checkDefault">Female</label>
          </div>
          <div className="">
            <input type="radio" className="ms-2 form-check-input" name="radioDefault" id="radioDefault3" />
            <label className="form-check-label ms-2 mb-3" for="checkDefault">Other</label>
          </div>
    </div>
  );
}
export default Gender;