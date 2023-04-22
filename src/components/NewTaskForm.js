import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category,
    };
    onTaskFormSubmit(newTask);
    setFormData({
      text: "",
      category: "Code",
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {categories.map((cat) => {
            if (cat !== "All") {
              return (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              );
            }
            return null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
