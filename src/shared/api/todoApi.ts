const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const todoApi = {
  async fetchTodos(limit = 10, offset = 0) {
    try {
      const response = await fetch(`${BASE_URL}/todos?_limit=${limit}&_start=${offset}`);

      // Добавляем искусственную задержку для демонстрации загрузки
      await sleep(1000);

      if (!response.ok) {
        throw new Error('Ошибка при загрузке задач');
      }

      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },
};
