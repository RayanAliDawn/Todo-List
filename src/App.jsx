import React, { useState } from 'react';

import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([

  ]);
  const [filter, setFilter] = useState("all");
  const [newItemTitle, setNewItemTitle] = useState("");

  const handleCheckboxChange = id => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  const handleNewItemSubmit = event => {
    event.preventDefault();
    if (newItemTitle.trim()) {
      const newItem = {
        id: Date.now(),
        title: newItemTitle.trim(),
        completed: false
      };
      setItems([...items, newItem]);
      setNewItemTitle("");
    }
  };

  const filteredItems = filter === "all" ? items :
    filter === "completed" ? items.filter(item => item.completed) :
      items.filter(item => !item.completed);

  return (
    <div className='container w-full '>
      <div className='flex flex-col justify-center items-center  '>
        <h1 className='m-8 font-semibold text-center text-gray-600 text-[1.5rem] '> THINGS TO DO</h1>

        <form onSubmit={handleNewItemSubmit} className="flex flex-row w-full">
          <input className="w-full border border-black rounded-lg  " placeholder='Add New '
            type="text"
            value={newItemTitle}
            onChange={event => setNewItemTitle(event.target.value)}
          />
          <button className='bg-black text-white shadow-md shadow-black  rounded-lg cursor-pointer' type="submit">Add Item</button>
        </form>
        <ul className='w-full  shadow shadow-gray-300 '>
          {filteredItems.map(item => (
            <li key={item.id} className="text-[1.5rem] ">
              <label className='pr-5'>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                {item.title}

              </label>
              <hr />
            </li>
          ))}
        </ul>
        <div className='  w-full flex flex-row-reverse '>
          <button className=' shadow-lg shadow-gray-300   ' onClick={() => handleFilterChange("all")}>All</button>
          <button className=' shadow-lg shadow-gray-300  mx-2  ' onClick={() => handleFilterChange("completed")}>Completed</button>
          <button className=' shadow-lg shadow-gray-300   ' onClick={() => handleFilterChange("active")}>Active</button>
        </div>

      </div>

    </div>

  )
}

export default App
