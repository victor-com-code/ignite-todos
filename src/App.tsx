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
          <span>Tarefas criadas 5</span>
          <span>Concluídas 0</span>
        </header>

        <div className={styles.emptyItens}>
          <ClipboardText size={20} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
