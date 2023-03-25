import React, { useState } from 'react';

import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addlist = (inputText) => {

    setListTodo([...listTodo, inputText]);

  }

  return (
    <div className='container max-w-full'>
      <div className='flex flex-col justify-center items-center  '>
        <h1 className='font-semibold text-center text-gray-600 text-[1.5rem] '> THINGS TO DO</h1>
        <TodoInput addlist={addlist} />

        {listTodo.map((listItem, i) => {
          return (
            <TodoList key={i} item={listItem} id='i' />
          )

        }

        )
        }


        <div className='  w-full flex flex-row-reverse '>
          <button className=' shadow-lg shadow-gray-300   '  >All</button>
          <button className=' shadow-lg shadow-gray-300  mx-2  '>Active</button>
          <button className=' shadow-lg shadow-gray-300   '>Completed</button>

        </div>

      </div>

    </div>

  )
}

export default App
