import styles from './App.module.css';

import { Header } from './components/Header';
import { Task } from './components/Task';

import { PlusCircle, ClipboardText } from '@phosphor-icons/react';

export function App() {
  return(
    <div>
      <Header />

      <form className={styles.taskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.wrapper}>
        <header className={styles.tasksInfo}>
          <span className={styles.created}>
            Tarefas criadas {' '}
            <span className={styles.taskCounter}>5</span>
          </span>

          <span className={styles.done}>
            Concluídas {' '}
            <span className={styles.taskCounter}>0</span>
          </span>
        </header>

        {/* <div className={styles.emptyItens}>
          <ClipboardText size={60} />
          <span>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </span>
        </div> */}

        <Task />
        <Task />
        <Task />
        <Task />
        <Task /> 
      </div>
    </div>
  );
}
