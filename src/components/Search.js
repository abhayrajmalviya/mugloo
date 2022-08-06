import React, { useState } from 'react'
import { useResultContext } from '../Contexts/ResultContextProvider';

const Search = () => {
  const [text, setText] = useState('Abhayraj Malviya');
  const { setSearchTerm} = useResultContext();


  const handleSubmit =(e) =>{
    e.preventDefault();
    setSearchTerm(text);
  }

  return (
    <div className='relative xs:pl-0 pl-16 w-full sm:pl-4 xs:w-80 '>
        <form onSubmit={handleSubmit}>
          <input 
            value={text}
            type="text"
            className='sm:w-full w-full h-3 xs:h-4 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
            placeholder='search...'
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        {
          text && (
            <button type="button" 
              className="absolute top-1.5 right-4 text-2xl text-gray-500"
              onClick={()=>setText('')}
            >
              X
            </button>
          )
        }
        {/* <Links/> */}
    </div>
  )
}

export default Search
