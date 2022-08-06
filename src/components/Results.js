import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
  const { results, isLoading, getResults, searchTerm} = useResultContext();

  const location = useLocation();

  useEffect(()=>{
    if (searchTerm){
      if (location.name === '/video'){
        getResults(`/search/q=${searchTerm} videos`);
      }else{
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
    
  },[searchTerm, location.pathname]);

  if(isLoading)  return <Loading/>;
  // console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-col px-52 md:px-10 sm:px-10 xs:pl-3 xs:pr-10 space-y-6 '>
          {
            results?.search &&
            results?.search_data?.map(({link, title},index) =>(
              <div key={index} className='w-full'>
                <a href={link} target="_blank" rel="noreferrer">  
                  <p className="text-sm">
                    {link?.length > 30 ? link.substring(0,30) : link}
                    {/* {link} */}
                  </p>
                  <p className="text-lg hover:underline dark:test-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
              </div>
          ))}
        </div>
      )
    case '/image':
      return (
        <div className="flex flex-wrap justify-center  items-center">
          {
            results?.images && results?.image_data?.map(({image,link},index) => (
                <div key={index}>
                  <a className='sm:p-3 p-5' href={link?.href} key={index} target='_blank' rel="noreferrer">
                    <img src= {image?.src} alt ={link?.title} loading="lazy"/>
                    <p className='w-36 break-words text-sm mt-2'>
                      {link?.title}
                    </p>
                  </a>
                </div>
            ))
          }
        </div>
      )
    case '/news':
      return (
        <div className="flex flex-col px-52 md:px-10 sm:px-10 xs:pl-3 xs:pr-10 space-y-6 ">
          {
            results?.news &&  
            results?.news_data?.map(({link, title, id , source}) =>(
                <div key={id} className='md:w-2/5 w-full'>
                  <a href={link?.[0]?.href} target="_blank" rel="noreferrer" className='hover:underline'>  
                    <p className="text-lg dark:test-blue-300 text-blue-700">
                      {title}
                    </p>
                  </a>
                  <div className='flex gap-4'>
                    <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300">
                      {source?.href}
                    </a>
                  </div>
                </div>
            ))}
        </div>
      )
    case '/video':
      return (
        <div className='flex flex-wrap'>
          {
            results?.videos &&
            results?.videos_data?.map((video, index)=>(
              <div key={index} className='p-2'>
                {
                  video.additional_links?.[0]?.href &&
                  <ReactPlayer url={video.additional_links?.[0]?.href} controls width="355px" height="200px"/>}
              </div>
            ))
          }
        </div>
      )
  
    default:
      return 'ERROR'
  }
}

export default Results
