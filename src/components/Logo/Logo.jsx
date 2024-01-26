import React from 'react'
import logo from '../../assets/logo.png'
import style from './Logo.module.css';

const Logo = () => {
  return (
    <img className={style.logo} src={logo} alt='logo' width={67}/>
  )
}

export default Logo
