import style from './Task.module.css';

import { Trash } from '@phosphor-icons/react';

export function Task() {
  
  return(
    <div className={style.task}>
      <label>
        <input type="checkbox" />
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      </label>
      <button>
        <Trash size={18} />
      </button>
    </div>
  );
}