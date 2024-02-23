import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './MyRouters/Home';
import About from './MyRouters/About';
import './App.css';
function App() {
    return (
      <div className='App'>
        <h1>This is my App JS File</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
  }
export default App;