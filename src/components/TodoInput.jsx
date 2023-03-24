import React, { useState } from 'react'

export default function TodoInput(props) {
    const [inputText, setInputText] = useState('');


    return (
        <div className='w-full flex flex-row gap-5'>
            <input type='text' className='w-full ' placeholder='Add New' value={inputText} onChange={event => setInputText(event.target.value)} />
            <button className='bg-blue-600 p-2 rounded-md' onClick={() => { props.addlist(inputText) + setInputText('') }}>Enetr</button>
        </div>
    )
}
