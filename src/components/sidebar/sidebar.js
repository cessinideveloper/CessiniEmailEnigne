import React from 'react'
import './sidebar.css'
import {Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

const Sidebar = ()=>{
    const {push} = useHistory(null);
    return (
        
                <div className="sidebar-sticky">
                    <div className="sidebar-content">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/newcamp"><Button variant="secondary">Create Campaign</Button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard/newemaillist"><Button variant="secondary">Create EmailList</Button></Link>
                        </li>
                    </ul>
                    </div>
                </div>
                
    )
}
export default Sidebar;
