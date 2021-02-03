import React from 'react'
import './sidebar.css'
import { Link, useHistory } from "react-router-dom";


const Sidebar = ()=>{
    const { push } = useHistory(null);
    return(
        <div className="sidebar">
            <Link to="/dashboard" className="item"> Dashboard </Link>
            <Link to="/dashboard/newcamp" className="item">Create Campaign</Link>
            <Link to="/dashboard/newemaillist" className="item">Create EmailList</Link>
            <Link onClick={(e) => {push("/");
            localStorage.clear()}} className="item">Logout</Link>
        </div>
    );
}

export default Sidebar
