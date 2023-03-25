import React, { useState } from 'react'

export default function TodoInput(props) {
    const [inputText, setInputText] = useState('');


    return (
        <div className='w-full flex flex-row  border'>
            <input type='text' className="w-full border-black rounded-lg  " placeholder='Add New' value={inputText} onChange={event => setInputText(event.target.value)} />
            <button className='bg-black text-white shadow-md shadow-black p-2 rounded-lg cursor-pointer' onClick={() => { props.addlist(inputText) + setInputText('') }}>Enter</button>
        </div>
    )
}
