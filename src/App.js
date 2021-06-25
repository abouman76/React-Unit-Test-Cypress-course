import "./App.css";
import Button from "./components/button";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <h1>Cypress Unit Testing with React</h1>
      <Button />
      <TodosList />
    </div>
  );
}

export default App;
