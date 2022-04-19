import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
// import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
