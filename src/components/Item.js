export default function Item({ item, onDeleteItems, onToggleCheckbox }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.status}
        onChange={() => onToggleCheckbox(item.id)}
      />
      <span style={item.status ? { textDecoration: "line-through" } : {}}>
        {item.quantity}&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
