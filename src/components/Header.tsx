import style from './Header.module.css';
 
import toDoLogo from '../assets/Logo.svg'

export function Header() {
  return(
    <header className={style.header}>
      header
      <img src={toDoLogo} alt="" />
    </header>
  );
}