import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav className={s.navBar}>
        <NavLink to="/" className={s.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <hr />
    </>
  );
};
