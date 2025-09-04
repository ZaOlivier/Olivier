import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* <Route path='/' element={<Header/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
