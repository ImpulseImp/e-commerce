import { Fragment } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigations.styles.scss';
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/sign-in'>
            Sign-in
          </Link>

          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
