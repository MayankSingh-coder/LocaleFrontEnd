import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Authentication from './Auth/Authentication';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={true?<HomePage/>:<Authentication/>}></Route>
      </Routes>
    </div>
      );
}

export default App;
