import { useState } from "react";
export default function Form({ onAddItems, chooseDay }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, pasked: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What's next task for {chooseDay}? </h3>

      <input
        type="text"
        placeholder="Your next task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
