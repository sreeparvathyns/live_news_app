import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ViewAll/>}/>



     </Routes>
     
     
     
     </BrowserRouter>
    </div>
  );
}

export default App;
