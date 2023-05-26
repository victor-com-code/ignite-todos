import { HTMLAttributes, useId } from 'react';
import style from './Task.module.css';

import { Trash } from '@phosphor-icons/react';

export interface TaskType {
  id: string;
  content: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onMarkDoneTask: (id: string) => void;
}

export function Task({ task, onDeleteTask, onMarkDoneTask }: TaskProps){
  const inputId = useId();
  
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleDoneTask() {
    onMarkDoneTask(task.id);
  }

  return(
    <div className={style.task}>
      <input type="checkbox" id={inputId} onClick={handleDoneTask} />
      <label htmlFor={inputId}>
        <span>{ task.content }</span>
      </label>
      <button onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}