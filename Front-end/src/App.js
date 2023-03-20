import './App.css';
import React from 'react';
// Import Screens

//Login Screens
import RestaurantLogin from './Screens/LoginScreens/RestaurantLogin';
import UserLogin from './Screens/LoginScreens/UserLogin';
import AdminLogin from './Screens/LoginScreens/AdminLogin';

//Register Screens
import UserRegister from './Screens/RegisterScreens/UserRegister';
import RestaurantRegister from './Screens/RegisterScreens/RestaurantRegister';
import AdminRegister from './Screens/RegisterScreens/AdminRegister';

//Home Screens
import Home from './Screens/HomeScreens/Home';
import UserRestaurantHome from './Screens/HomeScreens/UserRestaurantHome';
import RestaurantHome from './Screens/HomeScreens/RestaurantHome';
import AdminHome from './Screens/HomeScreens/AdminHome';
import UserHome from './Screens/HomeScreens/UserHome';


//Import React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import AddRest from './Components/AddRest';
import ManageRest from './Components/manageRest';
import ListRest from './Components/listRest';
import ListUsers from './Components/listUsers';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/User' element={<UserLogin></UserLogin>}></Route>
          <Route path='/UserRegister' element={<UserRegister></UserRegister>}></Route>
          <Route path='/RestaurantRegister' element={<RestaurantRegister></RestaurantRegister>}></Route>
          <Route path='/AdminRegister' element={<AdminRegister></AdminRegister>}></Route>
          <Route path='/Restaurant' element={<RestaurantLogin></RestaurantLogin>}></Route>
          <Route path='/UserHome' element={<UserHome></UserHome>}></Route>
          <Route path='/UserRestaurantHome' element={<UserRestaurantHome></UserRestaurantHome>}></Route>
          <Route path='/RestaurantHome' element={<RestaurantHome></RestaurantHome>}></Route>
          <Route path='/AdminHome' element={<AdminHome></AdminHome>}></Route>
          <Route path='/Admin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/add' element={<AddRest></AddRest>}></Route>
          <Route path='/manage' element={<ManageRest></ManageRest>}></Route>
          <Route path='/list' element={<listRest></listRest>}></Route>
          <Route path='/users' element={<listUsers></listUsers>}></Route>
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;