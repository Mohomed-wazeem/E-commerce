import './App.css';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDes } from './pages/ProductDes';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

