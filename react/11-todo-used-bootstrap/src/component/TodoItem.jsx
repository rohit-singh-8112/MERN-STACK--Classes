import './CSS/button.css'
const TodoItem = ({keyId, todoText, todoDate}) => {
  const deleteHandler = () => {
    console.log("Delete button clicked for item:", keyId, todoText, todoDate);
  }
    return (
         <div className="container text-center">
        <div className="row ms-1" >
          <div className="col-5 text-start text-truncate">{todoText}</div>
          <div className="col-4 text-start text-truncate">{todoDate}</div>
          <div className="col-3">
            <button type="button" className="btn mt-1 btn-outline-danger button" onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
  export default TodoItem;