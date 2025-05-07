import { Comments } from '@/pages/Comments/ui/Comments';
import { Posts } from '@/pages/Posts';
import { Todo } from '@/pages/Todo';

export enum Routes {
  TODO = '/',
  POSTS = '/posts',
  COMMENTS = '/comments',
}

export const router = [
  {
    path: Routes.TODO,
    element: <Todo />,
    label: 'Todo',
  },
  {
    path: Routes.POSTS,
    element: <Posts />,
    label: 'Posts',
  },
  {
    path: Routes.COMMENTS,
    element: <Comments />,
    label: 'Comments',
  },
];
