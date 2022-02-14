import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import './styles/Home.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
