export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding tasks to your planner</em>
      </p>
    );
  const itemsNum = items.length;
  const statusNum = items.filter((item) => item.status).length;
  const percentageStatus = Math.round((statusNum / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageStatus === 100
          ? "You've done everything! Great job!"
          : `🧳 You have ${itemsNum} tasks on your list, and you've already done
        ${statusNum} (${itemsNum !== 0 ? percentageStatus : 0}%)`}
      </em>
    </footer>
  );
}
