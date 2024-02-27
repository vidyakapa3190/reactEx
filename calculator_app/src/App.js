import "./App.css";
import TaskManager from "./TaskManager";
import Counter from "./Count.js";
import Quiz from "./Quiz.js";
import ApiEx from "./ApiEx.js";
import Calc from "./calc.js";

function App() {
  return (
    <div className="App">
      <TaskManager />
      <Counter />
      <Quiz />
      <ApiEx />
      <Calc />
    </div>
  );
}

export default App;
