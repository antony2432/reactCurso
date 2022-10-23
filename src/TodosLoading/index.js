import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return(
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-CompleteIcon"></span>
      <p className="loadingTodo-Text">Cargando TODOS...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export { TodosLoading }