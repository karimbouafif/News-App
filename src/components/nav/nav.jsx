"use client"
import React, { useState } from 'react';
import "../../assets/sass/layout/_navigation.scss"

function Navigation() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={open} onChange={handleToggle} />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>News</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Politcs</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>ENTERTAINMENT</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Life</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Personal</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
