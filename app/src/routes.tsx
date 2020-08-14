import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Point from './pages/Point';
import MapTest from './pages/Map/MapHook'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component= {Home} path="/" exact/>
            <Route component= {Point} path="/point"/>
            <Route component={MapTest} path='/test'/>
        </BrowserRouter>
    );
}

export default Routes;