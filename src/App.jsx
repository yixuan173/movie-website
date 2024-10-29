import './App.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import ToWatchList from './pages/ToWatchList';

function App() {
  return (
    <>
      <h1>Simple Movie Website</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/toWatchList">To Watch List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/toWatchList' element={<ToWatchList />} />
        </Routes>
    </>
  )
}

export default App