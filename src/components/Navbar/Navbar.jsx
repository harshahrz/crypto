import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <>
      <div className='navbar'>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <Link to={'/'}>
          <img src={logo} alt="" className='logo' />
        </Link>
        <ul className="nav-links">
          <Link to={'/'}>
            <li>HOME</li>
          </Link>
          <Link to={'/features'}>
            <li>FEATURES</li>
          </Link>
        </ul>
        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
          <Link to={'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'}>
            <button>API JSON<img src={arrow_icon} alt="" /></button>
          </Link>
        </div>
      </div>

      <div className={`overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>
      <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-content">
          <Link to={'/'} onClick={closeSidebar}>HOME</Link>
          <Link to={'/features'} onClick={closeSidebar}>FEATURES</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
