import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom';

//pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route 
            path="/" 
            element={<Home />} 
            />
          </Routes>
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;
