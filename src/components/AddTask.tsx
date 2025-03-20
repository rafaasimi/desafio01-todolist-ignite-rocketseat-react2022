import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css";
import React, { useState } from "react";

interface AddTaskProps {
  addNewTask: (task: string) => void;
}

export function AddTask({ addNewTask }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleAddNewTask(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    addNewTask(newTask);
    setNewTask("");
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTaskChange}
      />
      <button type="submit" onClick={handleAddNewTask}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
