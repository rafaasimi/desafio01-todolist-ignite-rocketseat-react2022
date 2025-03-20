import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";

import { AddTask } from "./components/AddTask";
import { Task, TaskList } from "./components/TaskList";
import { useState } from "react";

const tasks: Task[] = [
  {
    id: 1,
    content: "Dar ração/água para o cachorro.",
    isDone: false,
  },
  {
    id: 2,
    content: "Beber 2L de água.",
    isDone: true,
  },
  {
    id: 3,
    content: "Estudar programação.",
    isDone: false,
  },
];

function App() {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  function addNewTask(newTask: string) {
    setTasksList((state) => {
      return [...state, {
        id: state.length + 1,
        content: newTask,
        isDone: false
      }]
    });
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask addNewTask={addNewTask} />
        <TaskList tasks={tasksList} />
      </div>
    </>
  );
}

export default App;
