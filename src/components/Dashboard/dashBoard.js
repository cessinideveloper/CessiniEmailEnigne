
import React, { useState, useRef, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './dashboard.css'
import Navbar from '../navbar/NavigationBar'
import Sidebar from "../sidebar/sidebar";

//Code Spliting
const Table = React.lazy(() => import('../table/table'));
const NewCamp = React.lazy(() => import('../Dashboard/CreateCampaigns/campaignForm'));
const LoadedCamp = React.lazy(() => import('../Dashboard//LoadedCampaigns/loadedCampaign'));
const EmailListForm = React.lazy(() => import('../Dashboard/CreateEmailList/emailListForm'));

const DashBoard = () => {

    const { push } = useHistory(null)

    const emailEditorRef = useRef(null);

    
    return (
        <React.Fragment>
            <div className="item1">
                <Navbar></Navbar>
                <div className="item2">
                    <Sidebar className="sidebar"></Sidebar>
                    <Suspense fallback={<p>Loading.....</p>}>
                        <Switch>
                            <Route exact path="/dashboard">
                                <Table />
                            </Route>
                            <Route path="/dashboard/newcamp">
                                <NewCamp />
                            </Route>
                            <Route path="/dashboard/loadedcamp">
                                <LoadedCamp />
                            </Route>
                            <Route path="/dashboard/newemaillist">
                                <EmailListForm />
                            </Route>
                        </Switch> 
                    </Suspense>
                </div>
            </div>
                
                    
        </React.Fragment>
        
    );
}

export default DashBoard;
