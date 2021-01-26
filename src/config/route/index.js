import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Home, DetailCovid} from '../../page/index'


const index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/detail-covid' component={DetailCovid} />
            </Switch>
        </BrowserRouter>
    );
}

export default index;
