
import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './dashboard.css'

import Navbar from '../navbar/navbar'
import Table from '../table/table'
import Sidebar from "../sidebar/sidebar";

const DashBoard = () => {

    const { push } = useHistory(null)

    const emailEditorRef = useRef(null);

    
    return (
        <>
            <Sidebar></Sidebar>
            <Table></Table>
        </>
        
    );
}

export default DashBoard;