import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/Login';
import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute';
import Register from './Authentication/Register/Register';
import HomeNav from './components/HomeNav';
import Bicycles from './pages/Home/Bicycles/Bicycles';
import Contact from './pages/Home/Contact/Contact';
import Explore from './pages/Home/Explore/Explore';
import Home from './pages/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import Reviews from './pages/Home/Reviews/Reviews';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <HomeNav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bicycles" element={
          <PrivateRoute>
            <Bicycles />
          </PrivateRoute>
        } />
        <Route path="explore" element={<Explore />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
