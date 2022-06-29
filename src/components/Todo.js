//props are use to make the custom react component accept data
function Todo(props){
  

  return(
    <div className="card">
        {/* We are now accessing our props inside our h2 */}
        {/* This allows us to accept data and pass it into our H2 component */}
        {/*Note:To access props we need to use it inside the Curly braces */}
        <h2 className="h2">{props.text}</h2>
        <div className="actions">
        <button className="btn"onClick={}>Delete</button>
        </div>        
      </div>
  );
}


export default Todo;