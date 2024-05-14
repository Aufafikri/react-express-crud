import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './Main'
import UpdateData from './components/UpdateData'
import TambahData from './components/TambahData'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/update/:id' element={<UpdateData />}></Route>
        <Route path='/tambah' element={<TambahData />}></Route>
      </Routes>
    </Router>
  )
}

export default App