export const SETTINGS_CONFIG = [
  {
    id: 'editMode',
    label: ' Режим Редактирования',
    options: [
      {value: 'inline', label: 'В списке'},
      {value: 'modal', label: 'В модалке'},
    ],
  },
  {
    id: 'theme',
    label: 'Тема',
    options: [
      {value: 'dark', label: 'Dark'},
      {value: 'light', label: 'Light'},
    ]
  },
  {
    id: 'lanuage',
    label: 'Язык',
    options: [
      {value: 'en', label: 'English'},
      {value: 'ru', label: 'Russian'},
    ]
  },
];


export const getDefaultSettings = () => {
  return (
    SETTINGS_CONFIG.reduce((acc, curr) => {
      acc[curr.id] = curr.options?.[0]?.value ?? null;
      return acc
    }, {}))
}