import React from 'react'

function TodoList(props) {

    if (typeof props.item === 'string' || typeof props.item === 'number') {
        return <div className='w-full my-4 '>
            <input type='checkbox' className='mr-2' />
            {props.item}
            <div className='mt-4'>
                <hr />
            </div>
        </div>;
    }
    return null;
}


export default TodoList