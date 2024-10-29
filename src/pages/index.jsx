import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Search from './Search';
import ToWatchList from './ToWatchList';



const App = () => {
  return (
    <div>
      <h1>Simple Movie Website</h1>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/search'>Search</a></li>
          <li><a href='/toWatchList'>To Watch List</a></li>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/toWatchList' element={<ToWatchList />} />
        </Routes>
      </Router>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(
//   <Router>
//     <Routes>
//       <Route element={<Home />} path={'/'}></Route>
//       <Route element={<Search />} path='/search'></Route>
//       <Route element={<ToWatchList />} path='/toWatchList'></Route>
//     </Routes>
//   </Router>
// );
