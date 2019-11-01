import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import searchImg from '../../Images/search.svg';
import homeImg from '../../Images/home.svg';
import portfolioImg from '../../Images/portfolio.svg';

const Nav = () => {
  return (
    <>
      <NavLink className='nav-button' to='/'>
        <img src={homeImg} alt='home button' />
      </NavLink>
      <NavLink className='nav-button' to='/'>
        <img src={portfolioImg} alt='portfolio button' />
      </NavLink>
      <NavLink to='/hello' className='nav-button'>
        <img src={searchImg} alt='search button' />
      </NavLink>
    </>
  )
}

export default Nav;