import logo from './logo.svg';
import './App.css';
//import { Student } from './components/students/Student';
//import { Header } from "./Header"
//import Footer from "./Footer"
import { Route, Routes } from 'react-router-dom';
import { UserApi } from './api/UserApi';
import { UserNavbar } from './api/UserNavbar';
import { UserReg } from './api/UserReg';
import Header from './Header';
import Footer from './Footer';
import { Home } from './components/Home/Home';
import { Login } from './components/Login';
import { USERDASHBOARD } from './components/USERDASHBOARD';
function App() {
  var name = "raj";
  var age = 30;
  var isActive = true;
  var user = {
    name: "virat",
    age: 32,

    isActive: true,
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/usernavbar" element={<UserNavbar />} />
        <Route path="/userApi" element={<UserApi />} />
        <Route path='/userreg' element={<UserReg />} />
        <Route path='/home' element={<Home />} />
        <Route path='/userdashboard' element={<USERDASHBOARD />} />

      </Routes>
    </div>
  );
}

export default App;
