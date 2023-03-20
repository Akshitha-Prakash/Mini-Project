import React, { useEffect, useState } from 'react';
import {useLocation, Link, useNavigate, Navigate} from 'react-router-dom';
import LogoutImg from '../../Icons/Logout.svg';
import add_icon from '../../Icons/add_icon.svg';
import manage_icon from '../../Icons/manage_icon.svg';
import list from '../../Icons/list.svg';
import user_list from '../../Icons/user_list.svg';

import { Routes, Route } from 'react-router-dom';
import AddRest from '../../Components/AddRest';
import ManageRest from '../../Components/manageRest';
import ListRest from '../../Components/listRest';
import ListUsers from '../../Components/listUsers';


function AdminHome() {
  const [option, setoption] = useState(1);
  //Navigate
  const navigate = useNavigate();

  const handleAddRest = () => {
    setoption(1);
  }
  const handlemanageRest = () => {
    setoption(2);
  }
  const handlelistRest = () => {
    setoption(3);
  }
  const handlelistUsers = () => {
    setoption(4);
  }
  const handleLogout = (e) => {
    navigate('/');
  }
  const content = () => {
    switch(option) {
      case 1: return <AddRest></AddRest>
      case 2: return <ManageRest></ManageRest>
      case 3: return <ListRest></ListRest>
      case 4: return <ListUsers></ListUsers>
      // default: return <div>Error</div>
    }
  }

  return (

    <div>
        <div class="ml-[300px]">
          {/* Content */}
          {
            content()
          }
      </div>
      
    <div>
      {/* Side Bar */}
    <div
      className="sidebar fixed top-0 bottom-0 lg:left-0 p-6 w-[300px] overflow-y-auto text-center bg-white shadow-lg"
    >
      {/* AppLogo Logo */}
      <div className="text-black text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <h1 className="font-bold text-black text-3xl ml-3">Admin</h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      
      <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white"
                         onClick={handleAddRest}>
                        <img class="aspect-square" src={add_icon} />
                        <h4 className="font-bold text-black text-1xl ml-3">Add Restaurant</h4></button>

                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white" 
                        onClick={handlemanageRest}>
                        <img class="aspect-square" src={manage_icon} /> 
                        <h4 className="font-bold text-black text-1xl ml-3">  Manage Restaurants</h4></button>

                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white" 
                        onClick={handlelistRest}>
                        <img class="aspect-square" src={list} /> 
                        <h4 className="font-bold text-black text-1xl ml-3">List of Restaurants</h4></button>

                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white" 
                        onClick={handlelistUsers}>
                        <img class="aspect-square" src={user_list} /> 
                        <h4 className="font-bold text-black text-1xl ml-3"> Users</h4></button>

      {/* <div className="sidebar-wrapper">
                <nav id="sidebar">
                    <ul className="list-unstyled components">
            
                    <li>
                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white"
                         onClick={handleAddRest}>
                        <img class="aspect-square" src={add_icon} />
                        <h4 className="font-bold text-black text-1xl ml-3">Add Restaurant</h4></button>

                        

                    </li>
                    <li>
                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white" 
                        onClick={handlemanageRest}>
                        <img class="aspect-square" src={manage_icon} /> 
                        <h4 className="font-bold text-black text-1xl ml-3">  Manage Restaurants</h4></button>
                    </li>
            
                     <li>
                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white" 
                        onClick={handlelistRest}>
                        <img class="aspect-square" src={list} /> 
                        <h4 className="font-bold text-black text-1xl ml-3">List of Restaurants</h4></button>
                    </li>
            
                    <li>
                        <button className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white" 
                        onClick={handlelistUsers}>
                        <img class="aspect-square" src={user_list} /> 
                        <h4 className="font-bold text-black text-1xl ml-3"> Users</h4></button>
                    </li>
            
              </ul>
                </nav>
            </div> */}


      {/* Divider */}
      <div className="my-4 bg-gray-600 h-[1px]"></div>

      
      {/* Logout Button */}
      <button
        className="p-2.5 mt-3 flex w-full items-center rounded-md px-4 duration-300 hover:bg-mypeach text-black hover:text-white"
        onClick={handleLogout}
      >
        <img className="aspect-square " src={LogoutImg} />
        <span className="text-[15px] ml-4 font-bold">Logout</span>
      </button>
      
    </div>
      </div>
      </div>
)
}


export default AdminHome