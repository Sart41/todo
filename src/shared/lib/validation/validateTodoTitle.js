export const validateTodoTitle = (value) => {
  const trimmed = (value || '').trim();
  if (!trimmed) return 'Задача не может быть пустой'
  if (trimmed.length < 3) return 'Слишком короткое название';
  return null
}