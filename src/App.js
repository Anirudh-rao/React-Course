import Todo from "./components/Todo";
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1 className="h1">My Todo's</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Dive Deep in React'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
