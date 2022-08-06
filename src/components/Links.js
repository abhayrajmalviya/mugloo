import React from 'react'
import { NavLink } from 'react-router-dom'

const links =[
    {url: '/search', text:' Web'},
    {url: '/news', text:' News'},
    {url: '/image', text:' Images'},
    {url: '/video', text:' Videos'},
] ;
const Links = () => {
  return (
    <div className='flex flex-row mt-5 ml-96 gap-10 md:ml-10 sm:ml-10 xs:mr-20 xs:ml-20  xs:justify-evenly w-full'>
      
      {
        links.map(({url, text}, index) => (
          <NavLink key={index} to={url} className={({isActive}) => (isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 text-xl" : "hover:text-blue-700 hover:border-b-2 dark:hover:text-blue-300 hover:border-blue-700 text-xl")}>
             <p>{text}</p> 
          </NavLink>
        ))
      }
        
    </div>
  )
}

export default Links
