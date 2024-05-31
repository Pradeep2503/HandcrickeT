
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import TossPage from './TossPage';
import Gamsav from './Gamsav';

function App() {
  return (
    <div className="App">
     
     <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/TOSS" element={<TossPage/>} />
        <Route path="/GAMSAV" element={<Gamsav/>} />
     </Routes>

    </div>
  );
}

export default App;
