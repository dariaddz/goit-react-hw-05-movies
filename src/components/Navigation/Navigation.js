import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav className={s.navBar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.active : s.inactive)}
        >
          Movies
        </NavLink>
      </nav>
      <hr />
    </>
  );
};
