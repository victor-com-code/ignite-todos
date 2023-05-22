import style from './Task.module.css';

import { TrashSimple } from '@phosphor-icons/react';

export function Task() {
  
  return(
    <div className={style.task}>
      <input type="checkbox" name="" id="" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <TrashSimple size={16} />
    </div>
  );
}