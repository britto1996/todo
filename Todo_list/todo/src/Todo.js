import {
  Avatar,
  Button,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import db from "./firebase";
import { Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setinput] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a model</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setinput(event.target.value)}
          />
          <Button
            className="update"
            onClick={updateTodo}
            variant="contained"
            color="primary"
          >
            Update todo
          </Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary={props.todo.timestamp}
          />
        </ListItem>
        <Button
          variant="contained"
          color="primary"
          className="edit"
          onClick={(e) => setOpen(true)}
        >
          Edit
          <EditIcon />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="delete"
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          Delete me
          <DeleteIcon />
        </Button>
      </List>
    </>
  );
}

export default Todo;
