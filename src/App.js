import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("@Todo/taskSaved")) || ['exemplo1']
  );
  const [completeds, setCompleteds] = useState(
    JSON.parse(localStorage.getItem("@Todo/doneSaved")) || ['exemplo2']
  );
  const [newTask, setNewTask] = useState("");

  const addItem = async (newItem) => {
    await setTasks([...tasks, newItem]);
    localStorage.setItem(
      "@Todo/taskSaved",
      JSON.stringify([...tasks, newItem])
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ marginTop: "15px" }}>Minha lista de tarefas</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
  
          <input onChange={(e) => setNewTask(e.target.value)} />
          <button className="btnStyle" type="submit" placeholder="Adicionar" onClick={() => addItem(newTask)}>
          Criar
              </button>
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: "column"}}>
          <p>To do:</p>
            
          <div 
          style={{ display: 'flex', 
            flexWrap:"wrap", justifyContent: 'center', marginBottom: '22px'}}> 
              {tasks?.map((one, index) => (
              <Card
                key={index}
                one={one}
                setTasks={setTasks}
                tasks={tasks}
                completeds={completeds}
                addItem={addItem}
                setCompleteds={setCompleteds}
              />
            ))}
            </div>
           
        </div>
        <div style={{ display: 'flex', flexDirection: "column"}}>
          <p>Finalizadas:</p>
          <div style={{ display: 'flex', flexWrap:"wrap", justifyContent: 'center'}}> 
            {completeds?.map((one, index) => (
              <Card
                key={index}
                one={one}
                setCompleteds={setCompleteds}
                completeds={completeds}
                setNewTask={setNewTask}
                addItem={addItem}
                completed
              />
            ))}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
