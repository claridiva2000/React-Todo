import React from "react";

export default function Todo(props) {
  let completed = props.item.completed ? " completed" : "";
return(
  <div className={`item ${completed}`} 
       key={props.item.id}
       onClick={event =>{
         props.toggleItem(props.item.id);
       }}
  >
  <p>{props.item.task}</p>
  
  </div>
  );
}
