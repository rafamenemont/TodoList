import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
// import Carousel from "react-elastic-carousel";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("@Todo/taskSaved")) || ['exemplo1']
  );
  const [completeds, setCompleteds] = useState(
    JSON.parse(localStorage.getItem("@Todo/doneSaved")) || ['exemplo2']
  );

  const [newTask, setNewTask] = useState("");
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 630, itemsToShow: 3, itemsToScroll: 3 },
    { width: 798, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1000, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1280, itemsToShow: 6, itemsToScroll: 6 },
    { width: 1500, itemsToShow: 7, itemsToScroll: 7 },
    { width: 1680, itemsToShow: 8, itemsToScroll: 8 },
    { width: 2220, itemsToShow: 9, itemsToScroll: 9 },
  ];

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
          <p>Pendentes:</p>
            
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
          {/* <Carousel breakPoints={breakPoints} style={{ width: "100%" }}> */}
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
          {/* </Carousel> */}
        </div>
      </header>
    </div>
  );
}

export default App;
