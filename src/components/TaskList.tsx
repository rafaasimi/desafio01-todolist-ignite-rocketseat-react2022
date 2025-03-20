import { Clipboard, Trash } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
  markTaskAsDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

export function TaskList({ tasks, markTaskAsDone, removeTask }: TaskListProps) {
  const countTasksCreated = tasks.length;
  const countTasksFinished = tasks.reduce((acc, task) => {
    if (task.isDone) {
      acc += 1;
    }
    return acc;
  }, 0);

  function handleMarkTaskAsDone(id: number) {
    markTaskAsDone(id);
  }

  function handleRemoveTask(id: number) {
    removeTask(id);
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span>{countTasksCreated}</span>
        </div>

        <div className={styles.tasksFinished}>
          <strong>Concluídas</strong>
          <span>{`${countTasksFinished} de ${countTasksCreated}`}</span>
        </div>
      </header>

      <div className={styles.listWrapper}>
        {countTasksCreated === 0 && (
          <div className={styles.emptyList}>
            <Clipboard size={56} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}

        {countTasksCreated > 0 && (
          <ul className={styles.tasksList}>
            {tasks.map((task) => (
              <li key={task.content}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => handleMarkTaskAsDone(task.id)}
                />
                <p>{task.content}</p>
                <button
                  title="Remover tarefa"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  {<Trash size={24} />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
