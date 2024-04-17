import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Private/PrivateRoute';
import { useState } from 'react';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Business from './pages/Register/Business/Business';
import People from './pages/Register/People/People';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Profile from './pages/Talent/Profile';
import Apply from './pages/Talent/Apply';
import Users from './pages/Talent/Users';
import { UserContextProvider } from './context/ByteContext';
import Enterprise from './pages/Enterprise/Enterprise';
import axios from 'axios';
import { ENDPOINT } from './config/constans';
import SearchApp from './pages/Enterprise/Applicants/SearchApp';
import CreateJobs from './pages/Enterprise/Projects/CreateJobs';

const axiosInstance = axios.create({
  baseURL: ENDPOINT.URLBASE,
  timeout: 5000,
});

const initialState = {
  user: null,
  axiosInstance: axiosInstance
};

function App() {
  const [globalState, setGlobalState] = useState(initialState);

  const setData = (data) => setGlobalState({ ...globalState, user: data });

  return (
    <UserContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/people" element={<People />} />
        <Route path="/business" element={<Business />} />
        <Route path="/enterprise" element={<PrivateRoute Component={Enterprise} />} />
        <Route path="/searchapp" element={<PrivateRoute Component={SearchApp} />} />
        <Route path="/createjobs" element={<PrivateRoute Component={CreateJobs}/>} />
        <Route path="/users" element={<PrivateRoute Component={Users}/>} />
        <Route path="/profile" element={<PrivateRoute Component={Profile} /> } />
        <Route path="/apply" element={<PrivateRoute Component={Apply} />} />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
