import React from "react";
import './Header.css';
import '../../Css/aem-grid.css';
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { RiShoppingBag3Line } from '@react-icons/all-files/ri/RiShoppingBag3Line';
import logo from '../Header/logo.jpg';
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../../Redux/actions/productsActions';
import { useNavigate } from "react-router-dom";

function Header({ profile, setProfile }) {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
      setProfile();
      console.log("Profile After Logout", profile);
    }
    navigate('/login');
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo" >
            <Link to="/"><img src={logo} /></Link>
          </div>
          <div className="header__categories">
            <nav>
              <ul>
                <li className="active"><NavLink to={'/'} >Home</NavLink></li>
                <li><NavLink to={'/women'}>Women</NavLink></li>
                <li><NavLink to={'/men'}>Men</NavLink></li>
                <li><NavLink to={'/electronics'}>Electronics</NavLink></li>
                <li><NavLink to={'/jewellery'}>Jewellery</NavLink></li>
                <li className="dropdown"><NavLink to="" className="dropbtn">My Events</NavLink>
                  <div class="dropdown-content dropdown-content1">
                    <Link to="/create-event">Create Event</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__icons">
            <ul>
              <li><NavLink to='#'><span><FiSearch /></span> Search</NavLink></li>
              <li>
                {profile && profile._delegate.displayName ? (<Link to="/" onClick={handleAuth}><span><FiUser /></span>Logout</Link>) : (<Link to="/login"><span><FiUser /></span>Login</Link>)}
              </li>
              <li className="itemnumbers">
                <NavLink to="/cart">
                  <span className="cart__icon"><RiShoppingBag3Line /></span>
                </NavLink>
              </li>

              {/* <li className="itemnumbers">
                <NavLink to="/cart">
                  <span className="cart__icon"><RiShoppingBag3Line /></span> {' '}
                  {props.countCartItems ? (
                    <span className="cart__count">{props.countCartItems}</span>
                  ) : (
                    ''
                  )}
                </NavLink>{' '}
              </li> */}
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
