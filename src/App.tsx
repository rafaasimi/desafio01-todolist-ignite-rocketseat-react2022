import { Header } from "./components/Header";

import "./global.css";
import styles from "./App.module.css";

import { AddTask } from "./components/AddTask";
import { Task, TaskList } from "./components/TaskList";
import { useState } from "react";

const tasks: Task[] = [];

function App() {
  const [tasksList, setTasksList] = useState<Task[]>(tasks);

  function addNewTask(newTask: string) {
    setTasksList((state) => {
      return [
        {
          id: new Date().getTime(),
          content: newTask,
          isDone: false,
        },
        ...state,
      ];
    });
  }

  function removeTask(id: number) {
    const tasks = tasksList.filter((task) => task.id !== id);

    if (!confirm("Deseja realmente excluir essa tarefa?")) {
      return;
    }

    setTasksList(sortTasks(tasks));
  }

  function markTaskAsDone(id: number) {
    const tasks = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }

      return { ...task };
    });

    setTasksList(sortTasks(tasks));
  }

  function sortTasks(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => {
      if (!a.isDone && b.isDone) return -1; // a vem antes de b
      if (a.isDone && !b.isDone) return 1; // b vem antes de a
      return 0; // mantém a ordem se ambos forem iguais
    });
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask addNewTask={addNewTask} />
        <TaskList
          tasks={tasksList}
          markTaskAsDone={markTaskAsDone}
          removeTask={removeTask}
        />
      </div>
    </>
  );
}

export default App;
