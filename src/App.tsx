import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './App.module.css';

import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Task, TaskType } from './components/Task';

import { PlusCircle, ClipboardText } from '@phosphor-icons/react';

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTaskContent, setNewTaskContent] = useState('');

  const totalDoneTasks = tasks.reduce( (allDones, task) => {
    if(task.done === true) { allDones++ }
    return allDones;
   }, 0 ); 

  const totalCreatedTasks = tasks.length;

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const task: TaskType = {
      id: uuidv4(),
      content: newTaskContent,
      done: false
    };

    setTasks([
      ...tasks,
      task
    ]);

    setNewTaskContent('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);

    event.target.setCustomValidity('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskId
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function markDoneTask(taskId: string) {
    const newTasks = tasks.map((task => { 
      if(task.id === taskId)  return { ...task, done: !task.done };
      return {
        ...task
      };
     }));

     setTasks(newTasks);
  }

  return(
    <div>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input 
          name="task" 
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          value={newTaskContent}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
        />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.wrapper}>
        <header className={styles.tasksInfo}>
          <span className={styles.created}>
            Tarefas criadas
            <span className={styles.taskCounter}>{totalCreatedTasks}</span>
          </span>

          <span className={styles.done}>
            Concluídas
            <span className={styles.taskCounter}>{totalDoneTasks} de {totalCreatedTasks}</span>
          </span>
        </header>

        <div className={tasks.length === 0 ? styles.emptyItens : styles.hidden}>
            <ClipboardText size={60} />
            <span>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
        </div>


        {
          tasks.map((task) => {
            return <Task key={task.content} task={task} onDeleteTask={deleteTask} onMarkDoneTask={markDoneTask} />
          })
        }
      </div>
    </div>
  );
}
