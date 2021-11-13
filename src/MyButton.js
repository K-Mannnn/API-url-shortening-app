import React from 'react'
import {useState} from 'react'

function MyButton ({item})  {
    const [buttonText, setButtonText] = useState('Copy')
  
    return (
      <li className='url-links' key={item.id}>
        <span className='full-link'> {item.link.substring(0, 30)} </span>
        <a className='anchor' href="#url">{item.name}</a>
        <button 
          className = 'btnCopy'
          onClick = {() => { 
            navigator.clipboard.writeText(item.name); 
            setButtonText("Copied!")}
          }>
          {buttonText}
        </button>
      </li>
  )
  }


export default MyButton