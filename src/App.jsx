import React, { useState } from 'react';

import './App.css'
function App() {
  const [count, setCount] = useState(0);
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
      setCount(count + 1);
    }
  };

  const filteredItems = filter === "all" ? items :
    filter === "completed" ? items.filter(item => item.completed) :
      items.filter(item => !item.completed);

  return (
    <div className='Container w-full '>
      <div className='flex flex-col justify-center items-center m-4 bg-white p-1 shadow-2xl'>
        <h1 className='m-8 font-semibold animate-text text-transparent bg-clip-text bg-gradient-to-r from-gray-500 from-10% via-sky-500 via-30% to-gray-500 to-90% text-[1.9rem] '> THINGS TO DO</h1>

        <form onSubmit={handleNewItemSubmit} className=" w-full shadow ">
          <input className="w-full p-2 drop-shadow-xl bg-white " placeholder='Add New Here '
            type="text"
            value={newItemTitle}
            onChange={event => setNewItemTitle(event.target.value)}

          />

        </form>
        <ul className='w-full text-gray-600 py-2 '>

          {filteredItems.map(item => (
            <li key={item.id} className="text-[1.5rem]">
              <label>

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
        <div className='  w-full flex justify-around text-[0.9rem]   h-10 p-2 bg-gradient-to-r from-gray-300 from-10% via-sky-200 via-30% to-gray-300 to-90%'>
          <h1>{count}  left</h1>
          <div >
            <button className='cursor-pointer   ' onClick={() => handleFilterChange("completed")}>Completed</button>
            <button className='cursor-pointer mx-2   ' onClick={() => handleFilterChange("active")}>Active</button>
            <button className='cursor-pointer   ' onClick={() => handleFilterChange("all")}>All</button>
          </div>



        </div>

        <h1 class="animate-text bg-gradient-to-r from-gray-500 via-sky-500 to-gray-500 bg-clip-text text-transparent  font-black text-[1rem]">keep Going </h1>

      </div>
    </div>

  )
}

export default App
