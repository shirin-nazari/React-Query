
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import HomePage from './components/HomePage';
import RQsuperheroesPage from './components/RQsuperheroesPage';
import SuperheroesPage from './components/SuperheroesPage';
import RQSuperHero from './components/RQSuperHero';
import ParallelQueryes from './components/ParallelQueryes';
import DynamicParallelPage from './components/DynamicParallelPage';
import DependentQueriesPage from './components/DependentQueriesPage';
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path='/rq-dependent' element={<DependentQueriesPage email='shirinnazari.h@gamil.com' />} />
            <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage heroId={[1, 3]} />} />
            <Route path='/rq-parallel' element={<ParallelQueryes />} />
            <Route path='/super-heroes' element={<SuperheroesPage />} />
            <Route path='/rq-super-heroes' element={<RQsuperheroesPage />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
            <Route path='/' element={<HomePage />} />
          </Routes>

        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
