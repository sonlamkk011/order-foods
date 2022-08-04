import Public from "../../../Public";
import RiceDetails from "../../Home/Foods/RiceDetails/RiceDetails";
import Navbar from "../Navbar/Navbar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import "./Header.scss";
import { CartContext } from "../../Contexts/Cart";
import Sidebar from "../SideBar/Sidebar";
import { Button } from "antd";
const Header = () => {
  return (
    <>
      <div id="header">
        <div className="container-scroller">
          <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo mr-5" href="/">
                Oder
                <FastfoodIcon /> Food
              </a>
             
              
            </div>
            
           
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <div className="foods-details">
                <Link to="/foods-details">
                  <h1 className="foods">Foods</h1>
                
                </Link>
              </div>
              <div className="drinks-details">
              <Link to="/soft-drinks">
                  <h1 className="drinks">Drinks</h1>
                
                </Link>

              </div>
              <div className="cart">
                  <CartContext.Consumer>
                    {({ cartItems }) => (
                      <Link to="/view-cart">
                         <ShoppingCartIcon  style={{color:"rgb(0, 177, 79)"}}/>({cartItems.length})
                      </Link>
                    )}
                  </CartContext.Consumer>
                </div>
             
              <ul className="navbar-nav navbar-nav-right">
                
               
                <li className="nav-item dropdown">
                  <a
                    className="nav-link count-indicator dropdown-toggle"
                    id="notificationDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="icon-bell mx-0" />
                    <span className="count" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Notifications
                    </p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="ti-info-alt mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          Application Error
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Just now
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="ti-settings mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          Settings
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="ti-user mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          New user registration
                        </h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item nav-profile dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <img src="Assets/images/faces/face28.jpg" alt="profile" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="ti-settings text-primary" />
                      Settings
                    </a>
                    <Link className="dropdown-item" to="/account-login">
                      <i className="ti-power-off text-primary" />
                      Login
                    </Link>
                    <Link className="dropdown-item" to="/account-login">
                      <i className="ti-power-off text-primary" />
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* <Navbar /> */}
          {/* <Home /> */}
        </div>
      </div>
      
    </>
    
  );
};
export default Header;
