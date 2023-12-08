import React, { useState } from 'react';
import { colors } from '../../style/color';
import './burgerCrossIcon.css';

const BurgerCrossIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container ${isOpen ? 'nav-open' : ''}`}>
      <a id="menu-toggle" className="menu-toggle" onClick={handleClick}>
        <span className="menu-toggle-bar menu-toggle-bar--top"></span>
        <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
        <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
      </a>
    </div>
  );
};

export default BurgerCrossIcon;
