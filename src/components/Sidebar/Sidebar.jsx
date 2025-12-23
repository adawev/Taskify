// import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logo from '../../images/taskify_logo.png';
import './Sidebar.scss';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
  navigate("/"); 
};
    const currentUser = {
        name: 'Pirmamatov Sh',
        avatar: null,
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="Taskify" className="sidebar-logo" onClick={handleClick}/>
            </div>

            <nav className="sidebar-nav">
                <NavLink
                    to="/dashboard/teams"
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                    <i className="bi bi-people-fill"></i>
                    <span>Teams</span>
                </NavLink>

                <NavLink
                    to="/dashboard/my-tasks"
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                    <i className="bi bi-list-task"></i>
                    <span>My Tasks</span>
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <Dropdown drop="up">
                    <Dropdown.Toggle as="div" className="user-profile">
                        <div
                            className="user-avatar"
                            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: "5px"}}
                        >
                            P SH
                        </div>
                        <div className="user-info">
                            <span className="user-name">{currentUser.name}</span>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate('/profile')}>
                            <i className="bi bi-person"></i> Profile
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={() => navigate('/')}>
                            <i className="bi bi-box-arrow-right"></i> Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Sidebar;
