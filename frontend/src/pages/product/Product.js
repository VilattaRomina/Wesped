import React from 'react'
import {Routes, Route} from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <Routes>
            <Route path=':productId' element={<>Pagina a desarrollar</>} />
        </Routes>
    </div>
  )
}
