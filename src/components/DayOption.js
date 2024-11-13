import { useState } from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Stats from "./Stats";

export default function DayToChoose() {
  const [chooseDay, setChooseDay] = useState("Monday");
  const [items, setItems] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  function handleItemAdd(item) {
    setItems((prevItems) => ({
      ...prevItems,
      [chooseDay]: [...prevItems[chooseDay], item],
    }));
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => {
      const updatedDayItems = prevItems[chooseDay].filter(
        (item) => item.id !== id
      );
      return {
        ...prevItems,
        [chooseDay]: updatedDayItems,
      };
    });
  }

  function handleToggleItem(id) {
    setItems((prevItems) => {
      const updatedDayItems = prevItems[chooseDay].map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      return {
        ...prevItems,
        [chooseDay]: updatedDayItems,
      };
    });
  }

  function clearListItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items for this day?"
    );
    if (confirmed) {
      setItems((prevItems) => ({
        ...prevItems,
        [chooseDay]: [],
      }));
    }
  }
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div>
      <div className="days-button">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setChooseDay(day)}
            className={chooseDay === day ? "active" : ""}
          >
            {day}
          </button>
        ))}
      </div>
      <Form onAddItems={handleItemAdd} chooseDay={chooseDay} />
      <TasksList
        items={items[chooseDay]}
        onDeleteItems={handleDeleteItem}
        onToggleCheckbox={handleToggleItem}
        onClearList={clearListItems}
      />
      <Stats items={items[chooseDay]} />;
    </div>
  );
}
