import React from "react";
import SimpleModal from "../ModalDelete";
import { Container } from "./styles";

const Card = ({
  one,
  completed,
  setCompleteds,
  completeds,
  setTasks,
  tasks, addItem, setNewTask
}) => {
  const done = (one) => {
    setCompleteds([...completeds, one]);
    tasks.splice(tasks.indexOf(one), 1);
    setTasks(tasks);
    localStorage.setItem("@Todo/taskSaved", JSON.stringify([...tasks]));
    localStorage.setItem(
      "@Todo/doneSaved",
      JSON.stringify([...completeds, one])
    );
  };

  const deleteItem = (one) => {
    completeds.splice(completeds.indexOf(one), 1);
    setCompleteds(completeds);
    localStorage.setItem("@Todo/doneSaved", JSON.stringify([...completeds]));
    document.location.reload();
  };

  return (
    <Container >
      {completed ? (
          <div >
          <p style={{ textDecoration: 'line-through 2px'}} >{one}</p>
         <SimpleModal deleteItem={deleteItem} 
         addItem={addItem} setNewTask={setNewTask} tasks={tasks} completeds={completeds} one={one}/>
         </div>
      ) : (
          <div>
        <p>{one}</p>
        <button onClick={() => done(one)}>Finalizar</button>
        </div>
      )}

     
    </Container>
  );
};

export default Card;
