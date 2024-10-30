import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';


import Home from './pages/Home';
import Search from './pages/Search';
import ToWatchList from './pages/ToWatchList';

const Layout = styled.div`
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 4rem;
`;

const Content = styled.div`
`;

const Icon = styled.div`
  color: #fff;
`;

function App() {
  return (
    <Layout>
      <Header>
        <Link to="/">        
          <Icon>
            <ion-icon name="home" size="large"></ion-icon>
          </Icon>
        </Link>
        <Link to="/search">        
          <Icon>
            <ion-icon name="search" size="large"></ion-icon>
          </Icon>
        </Link>
        <Link to="/toWatchList">        
          <Icon>
          <ion-icon name="list" size="large"></ion-icon>
          </Icon>
        </Link>
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/toWatchList' element={<ToWatchList />} />
        </Routes>
      </Content>
    </Layout>
  )
}

export default App