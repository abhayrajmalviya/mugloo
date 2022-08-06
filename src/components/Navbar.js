import React from 'react'
import { Link } from 'react-router-dom'
import Links from './Links';
import Search from './Search';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='xs:pl-5 pl-10 pr-10 pt-5  flex flex-col items-center border-b dark:border-gray-700 border-gray-200 w-screen'>
      <div className='flex items-center  w-full'>
        <div className='flex w-3/4 xs:w-full'>
          <div className= 'xs:hidden sm:hidden'>
            <Link to ='/'>
              <p className=' text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900 '>
                Mugloo
              </p>
            </Link>
          </div>
        
        <Search/>
        </div>
        <>
        <button
          type='button'
          className='fixed text-2xl right-10 bottom-10 xs:right-3 dark:text-gray-900 bg-white rounded-full px-2 py-1 '
          onClick={(e) => setDarkTheme(!darkTheme)}
        >
          { darkTheme ? "💡": '🌙'}
        </button>
        </>
      </div>
      <Links/>
    </div>
  )
}

export default Navbar