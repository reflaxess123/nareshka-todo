export interface TodoItem {
  id: string; // Используем строковые ID
  title: string;
  completed: boolean;
}

export type TodoList = TodoItem[];

export interface TodoState {
  items: TodoList;
  isLoading: boolean;
  error: string | null;
  loadedCount: number;
}
