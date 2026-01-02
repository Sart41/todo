export const RenameButton = ({onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label="Редактировать"
    >
      ✏️
    </button>
  )
}