import './CSS/button.css'

const AddTodo = () => {
  const AddHandler =() => {
    console.log("Add button clicked");
    let todoInput = document.querySelector('.textInput').value;
    let dateInput = document.querySelector('.dateInput').value;
    console.log("Todo:", todoInput, "Date:", dateInput);
  }
    return (
      <div className="container text-center ">
        <div className="row">
          <div className="col-5">
            <input type="text" className="form-control textInput" placeholder="Enter todo here" ></input>
          </div>
          <div className="col-4">
            <input type="datetime-local" className="form-control dateInput"></input>
            </div>
          <div className="col-3">
            <button type="button" className="btn ms-1 btn-oustline-success button" onClick={AddHandler}>Success</button>
          </div>
        </div>
      </div>
    );
}
export default AddTodo;