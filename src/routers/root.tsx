import React from 'react';
import Landing from '../pages/landing/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Page } from '../app/constants/pages';


export default function RootRouter() {
    return (
        <Router>
            <Route path={Page.HOME} exact component={Landing}/>
        </Router>
    )
}