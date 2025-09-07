import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navbar/navbar';
import { Acceuil } from './page/acceuil';
import { Footer } from './components/footer/footer';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Acceuil/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
