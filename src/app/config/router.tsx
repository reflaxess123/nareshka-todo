import { Route, Routes } from 'react-router-dom';
import { router } from './routes';

export const RouterConfig = () => (
  <Routes>
    {router.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);
