import { useState }from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

//props are use to make the custom react component accept data
function Todo(props){
  //Usestate is  used to handle state managment in React
    //Takes in default parameter and also need two parameters 
    //one to store previous value another to store next/update the value
    const [modalIsOpen, SetModalIsOpen ] = useState(false);
  function deleteHandler(){
    SetModalIsOpen(true);
      
  }
  function closeHandler(){
    SetModalIsOpen(false);
  }

  return(
    <div className="card">
        {/* We are now accessing our props inside our h2 */}
        {/* This allows us to accept data and pass it into our H2 component */}
        {/*Note:To access props we need to use it inside the Curly braces */}
        <h2 className="h2">{props.text}</h2>
        <div className="actions">
          {/* The Onclick parameter will wait for button Click */}
          {/* It accepts only Funcion as a Input parameter */}
        <button className="btn"onClick={deleteHandler}>Delete</button>
        </div>
        {/* ow this will check if ModalIsOpenn is True */}
        {/*In React , The Components that we create has to be developed 100% by us i.e we 
        need to provide access to everything */}
        {modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler} /> }
        {modalIsOpen &&  <Backdrop  onClick={closeHandler}/>}
               
      </div>
  );
}


export default Todo;