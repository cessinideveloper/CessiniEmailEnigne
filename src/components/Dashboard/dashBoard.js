
import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './dashboard.css'
import Navbar from '../navbar/NavigationBar'
import Table from '../table/table'
import Sidebar from "../sidebar/sidebar";
import NewCam from '../Dashboard/CreateCampaigns/campaignForm';
import LoadedCamp from '../Dashboard/LoadedCampaigns/loadedCampaign';
import EmailListForm from '../Dashboard/CreateEmailList/emailListForm'

const DashBoard = () => {

    const { push } = useHistory(null)

    const emailEditorRef = useRef(null);

    
    return (
        <React.Fragment>
            <div className="item1">
                <Navbar></Navbar>
                <div className="item2">
                    <Sidebar className="sidebar"></Sidebar>
                    <Switch>
                        <Route path="/dashboard/newcamp" component={NewCam}></Route>
                        <Route path="/dashboard/loadedcamp" component={LoadedCamp}></Route>
                        <Route path="/dashboard/newemaillist" component={EmailListForm}></Route>
                        <Route render={()=> <Table className="table"></Table> }></Route>  
                    </Switch> 
                </div>
            </div>
                
                    
        </React.Fragment>
        
    );
}

export default DashBoard;
