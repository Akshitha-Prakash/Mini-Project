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
    <div>AdminHome</div>
  )
}


export default AdminHome