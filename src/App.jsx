import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';


import Home from './pages/Home';
import Search from './pages/Search';
import ToWatchList from './pages/ToWatchList';
import MovieDetailModal from './components/MovieDetailModal';
import ValidateModal from './components/ValidateModal';
import useValidateModalStore from "./stores/useValidateModalStore";


const Header = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  gap: 4rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  color: #fff;
`;

function App() {
  const isPass = useValidateModalStore((state) => state.isPass)
  return (
    <>
      {!isPass ? (
        <ValidateModal />
      ) : (
        <div>
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
          <MovieDetailModal />   
        </div>
      )}
    </>
  )
}

export default App