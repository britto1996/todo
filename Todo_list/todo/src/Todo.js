import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary={props.text} secondary="dummy" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
