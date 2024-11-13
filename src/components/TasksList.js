import { useState } from "react";
import Item from "./Item";

export default function TasksList({
  items,
  onDeleteItems,
  onToggleCheckbox,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "status")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.status) - Number(a.status));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleCheckbox={onToggleCheckbox}
            onClearList={onClearList}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by done status</option>
        </select>
        <button onClick={onClearList}>Clear</button>
      </div>
    </div>
  );
}
