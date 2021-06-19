import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Carousel from "react-elastic-carousel";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("@Todo/taskSaved")) || []
  );
  const [completeds, setCompleteds] = useState(
    JSON.parse(localStorage.getItem("@Todo/doneSaved")) || []
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

  const handleSubmit = async () => {
    await setTasks([...tasks, newTask]);
    localStorage.setItem(
      "@Todo/taskSaved",
      JSON.stringify([...tasks, newTask])
    );
  };

  useEffect(() => {
  }, [tasks, completeds]);

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
          <p>Adicionar:&nbsp;</p>
          <input onChange={(e) => setNewTask(e.target.value)} />
          <input type="submit" value="Create" onClick={handleSubmit} />
        </div>
        <br />
        <div>
          <h5>Pendentes:</h5>
          <Carousel breakPoints={breakPoints} style={{ width: "100%" }}>
            {tasks?.map((one, index) => (
              <Card
                key={index}
                one={one}
                setTasks={setTasks}
                tasks={tasks}
                completeds={completeds}
                setCompleteds={setCompleteds}
              />
            ))}
          </Carousel>
        </div>
        <div>
          <p>Finalizadas:</p>
          <Carousel breakPoints={breakPoints} style={{ width: "100%" }}>
            {completeds?.map((one, index) => (
              <Card
                key={index}
                one={one}
                setCompleteds={setCompleteds}
                completeds={completeds}
                completed
              />
            ))}
          </Carousel>
        </div>
      </header>
    </div>
  );
}

export default App;
