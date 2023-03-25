import React from 'react'

function TodoList(props) {

    if (typeof props.item === 'string' || typeof props.item === 'number') {
        return <div className='w-full my-3 shadow shadow-gray-300 p-3'>
            <input type='checkbox' className='mr-2' />
            {props.item}



        </div>;
    }
    return null;
}


export default TodoList