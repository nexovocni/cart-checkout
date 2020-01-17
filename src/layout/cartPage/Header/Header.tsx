import React, { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { CartComponentContext } from '../../../contexts/CartComponentContext';
import Logo from '../../../components/Logo/Logo';

const Header: React.FC = () => {
  const cartContext = useContext(CartComponentContext);
  const { switchPage } = cartContext.cartComponents;

  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <div className={switchPage ? 'header__nav' : 'header__nav__close'}>
          <Link to="#">Log In</Link>
          <Link to="#">Registration</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
