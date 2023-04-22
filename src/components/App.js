import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTaskList(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTaskList(filteredTasks);
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="App">
      <h2>My Tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={taskList} onDelete={removeTask} />
    </div>
  );
}

export default App;
