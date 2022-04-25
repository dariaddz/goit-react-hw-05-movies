import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Toaster />
    </>
  );
};
