export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding tasks to your planner</em>
      </p>
    );
  const itemsNum = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((packedNum / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You've done everything! Great job!"
          : `🧳 You have ${itemsNum} tasks on your list, and you've already done
        ${packedNum} (${itemsNum !== 0 ? percentagePacked : 0}%)`}
      </em>
    </footer>
  );
}
