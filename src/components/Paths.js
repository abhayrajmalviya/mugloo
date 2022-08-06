import Results from './Results'
import React from 'react'

import { Routes, Route, Navigate} from 'react-router-dom';

const Paths = () => {

  return (
    <div className='p-4'>
        <Routes>
          <Route path='/' element={<Navigate to='/search' replace />} />
          <Route exact path='/search' element={<Results />} />
          <Route exact path='/image' element={<Results />} />
          <Route exact path='/news' element={<Results />} />x
          <Route exact path='/video' element={<Results />} />
        </Routes>
    </div>
  )
}

export default Paths