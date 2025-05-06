import { Route, Routes } from 'react-router-dom';
import { Todo } from '@/pages/todo-page';
import { Routes as RoutePaths } from './routes';
import { Comments } from '@/pages/Comments';
import { Posts } from '@/pages/Posts';

export const router = [
  {
    path: RoutePaths.TODO,
    element: <Todo />,
    label: 'Todo',
  },
  {
    path: RoutePaths.POSTS,
    element: <Posts />,
    label: 'Posts',
  },
  {
    path: RoutePaths.COMMENTS,
    element: <Comments />,
    label: 'Comments',
  },
];

export const RouterConfig = () => (
  <Routes>
    {router.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);
