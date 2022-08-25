import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/Login';
import PrivateRoute from './Authentication/PrivateRoute/PrivateRoute';
import Register from './Authentication/Register/Register';
import HomeNav from './components/HomeNav';
import AddBicycle from './Dashboard/AddBicycle/AddBicycle';
import BicycleReview from './Dashboard/BicycleReview/BicycleReview';
import Dashboard from './Dashboard/Dashboard';
import MyOrders from './Dashboard/MyOrders/MyOrders';
import Payment from './Dashboard/Payment/Payment';
import Bicycles from './pages/Home/Bicycles/Bicycles';
import Contact from './pages/Home/Contact/Contact';
import Explore from './pages/Home/Explore/Explore';
import Home from './pages/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import Reviews from './pages/Home/Reviews/Reviews';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HomeNav />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bicycles" element={
            <PrivateRoute>
              <Bicycles />
            </PrivateRoute>
          } />
          <Route path="dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }>
            <Route index element={<AddBicycle />} />
            <Route path="/dashboard/payment" element={<Payment />} />
            <Route path="/dashboard/addBicycle" element={<AddBicycle />} />
            <Route path="/dashboard/myOrders" element={<MyOrders />} />
            <Route path="/dashboard/bicycleReview" element={<BicycleReview />} />
            {/* <Route path="/dashboard/ordersList" element={
            <OrdersLists />
          } />
          <Route path="/dashboard/manageServices" element={
            <ManageServices />
          } />
          <Route path="/dashboard/makeAdmin" element={
            <MakeAdmin />
          } /> */}

          </Route>
          <Route path="explore" element={<Explore />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ReactQueryDevtools initialIsOpen={true} />

      </QueryClientProvider>

    </div>
  );
}

export default App;
