import { Clipboard } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

export function TaskList({ tasks }: TaskListProps) {
  const countTasksCreated = tasks.length;
  const countTasksFinished = tasks.reduce((acc, task) => {
    if (task.isDone) {
      acc += 1;
    }
    return acc;
  }, 0);

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
        <div className={styles.emptyList}>
          <Clipboard size={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <ul className={styles.tasksList}></ul>
      </div>
    </main>
  );
}
