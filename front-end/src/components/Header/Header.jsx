import { NavLink } from 'react-router-dom';
import logo from '../../designs/img/argentBankLogo.webp';
import './Header.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanToken } from '../../Features/Login/ReducerLogin';
import { useNavigate } from 'react-router-dom';
import { findProfileInfo } from '../../Features/Profile/ActionProfile';

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  // si je me deconnecte je retourne a la page d'accueil et je n'ai plus acces au info du profile
  const signOut = () => {
    dispatch(cleanToken());
    navigate('/');
  };

  // si j'ai récupérer le token je diffuse alors les infos du profile 
  useEffect(() => {
    if (token) {
      dispatch(findProfileInfo(token));
    }
  }, [dispatch, token]);

  return (
    <header>
      <nav className='navbar'>
        <NavLink to='/'>
          <img
            src={logo}
            alt='ArgentBank Logo'
            className='navbar_logo'
          />
        </NavLink>
        <div className='navbar-container'>
          {token ?
            <div className='navbar-container'>
              <NavLink to='/profile' className='navbar_signin'>
                <i className='fa fa-user-circle iconSignin'></i>
                {username}
              </NavLink>
              <NavLink to='/' className='navbar_signin' onClick={signOut}>
                <i className='fa fa-sign-out iconSignin'></i>
                Sign Out
              </NavLink>
            </div>
            :
            <div>
              <NavLink to='/signin' className='navbar_signin'>
                <i className='fa-solid fa-circle-user iconSignin'></i>
                Sign In
              </NavLink>
            </div>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header