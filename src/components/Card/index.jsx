import React from "react";
import Modal from "@material-ui/core/Modal";
import SimpleModal from "../ModalDelete";

const Card = ({
  one,
  completed,
  setCompleteds,
  completeds,
  setTasks,
  tasks,
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
    <div style={{ minWidth: "100px", border: "1px #6A57B7 solid", borderRadius: "12px" }}>
      <p>{one}</p>
      {completed ? (
         <SimpleModal deleteItem={deleteItem} completeds={completeds} one={one}/>
      ) : (
        <button onClick={() => done(one)}>Finalizar</button>
      )}

     
    </div>
  );
};

export default Card;
