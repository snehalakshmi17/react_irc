// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

// const LoginPage = () => <div>Login Page</div>; // Create Login, Register, Store, and Contact components
// const RegisterPage = () => <div>Register Page</div>;
// const StorePage = () => <div>Store Page</div>;
// const ContactPage = () => <div>Contact Page</div>;

function App() {
  return (
    
      <div className="App">
       
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home/>} />
      
      <Route path="/Login" element={<LoginForm/>} />
      <Route path="/Register" element={<Registration/>} />
      <Route path="/Toy Brands" element={<Services/>} />
      <Route path="/Contact Us" element={<ContactUs/>} />
       
        </Routes>
     
        <Footer/>
      </div>
    
  );
}

 export default App;
// import React from 'react';
// import Services from './components/Services.jsx'

// function App() {
//   return (
//     <div className="App">
//       <Services/>
//     </div>
//   );
// }

// export default App;
