import React from 'react'
import style from '../style/style.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <a href="" className={style.link}>Car_Motors</a>
        <nav className="header_link">
          <a href="" className={style.link}>BMW</a>
          <a href="" className={style.link}>HONDA</a>
          <a href="" className={style.link}>LADA</a>
        </nav>
      </div>
    </div>
  )
}

export default Header
