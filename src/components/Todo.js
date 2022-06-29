//props are use to make the custom js
function Todo(props){
  return(
    <div className="card">
        <h2 className="h2">Title</h2>
        <div className="actions">
        <button className="btn">Delete</button>
        </div>        
      </div>
  );
}


export default Todo;