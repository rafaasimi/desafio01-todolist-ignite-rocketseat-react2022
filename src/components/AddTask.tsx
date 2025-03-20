import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
