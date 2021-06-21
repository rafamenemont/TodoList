import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { MdRestore } from "@react-icons/all-files/md/MdRestore";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({deleteItem, addItem, setNewTask, one}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function restore (){
      console.log(one)
    await addItem(one); 
    deleteItem(one);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">
        Tem certeza que deseja exluir está tarefa?
      </h2>
      <button onClick={() => {deleteItem(one); handleClose()}} >Sim</button>
      <button onClick={handleClose}>Não</button>
    </div>
  );

  return (
    <div style={{display: 'flex', justifyContent: 'flex-end' }}>

        <button onClick={() => restore(one)}>
        <MdRestore style={{fontSize: '30px' }}/>
            </button>

      <button type="button" onClick={handleOpen}>
      <MdDelete style={{fontSize: '30px' }}/>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}