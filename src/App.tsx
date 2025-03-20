import { Header } from "./components/Header";

import "./global.css";
import styles from './App.module.css'
import { AddTask } from "./components/AddTask";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
      </div>
    </>
  );
}

export default App;
