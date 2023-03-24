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
    <div className='flex justify-center items-center flex flex-col'>
      <h1 className='font-semibold text-center text-gray-600 text-[1.5rem] '> THINGS TO DO</h1>
      <TodoInput addlist={addlist} />
      <TodoList />
      {listTodo.map((listItem, i) => {
        return (
          <TodoList key={i} item={listItem} />
        )

      }

      )
      }
    </div>



    // <div className='flex flex-col justify-center items-center '>
    //   <header id='header' className='w-full' >
    //     <h1 className='font-semibold text-center text-gray-600 text-[1.5rem] '> THINGS TO DO</h1>
    //     <input className='w-full' placeholder='Add New' value={currentTask} onChange={event => setCurrentTask(event.target.value)}
    //     />
    //   </header>
    //   <section id='section' className='w-full'>
    //     <ul>
    //       <li>
    //         <input type={'checkbox'} />
    //         <hr />
    //       </li>

    //     </ul>
    //   </section>
    //   <footer className=' space-x-4 w-full pl-96'>
    //     <button>All</button>
    //     <button>Active</button>
    //     <button> Completed</button>
    //   </footer>
    // </div>

  )
}

export default App
