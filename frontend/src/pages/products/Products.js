import React from 'react'
import {Routes, Route} from 'react-router-dom'


export default function Products() {
  return (
    <div>
        <Routes>
            <Route path=':productId' element={<>PAgina a desarrollar</>} />
        </Routes>
    </div>
  )
}
