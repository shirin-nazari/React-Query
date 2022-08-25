
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RQsuperheroesPage from './components/RQsuperheroesPage';
import SuperheroesPage from './components/SuperheroesPage';

function App() {
  return (
    <BrowserRouter>

      <div >
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/super-heroes'>Traditional Super Heroes</Link></li>
            <li><Link to='/rq-super-heroes'>RQ Super Heroes</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/super-heroes' element={<SuperheroesPage />} />
          <Route path='/rq-super-heroes' element={<RQsuperheroesPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
