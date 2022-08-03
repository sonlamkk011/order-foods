import "./Sidebar.scss";
import { Link } from "react-router-dom";


const SidebarAdmin = () => {
  return (
    <>
      <div id="sidebar">
        <div className="container-scroller">
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/admin" className="nav-link" >
                  <i className="icon-grid menu-icon" />
                  <span className="menu-title">Home</span>
                </Link>
              </li>
            
             
             
              <li className="nav-item">
                <Link to="/admin-create-foods"
                  className="nav-link"
                  
                >
                  <i className="icon-paper menu-icon" />
                  <span className="menu-title">Create Foods</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default SidebarAdmin;
