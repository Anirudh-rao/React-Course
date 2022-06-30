import Todo from "./components/Todo";


function App() {
  return (
    <div>
      <h1 className="h1">My Todo's</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Dive Deep in React'/>
      </div>
  );
}

export default App;
