import React, { Component } from "react";
import Home from "../pages/containers/Home.js";
import ViewLayout from "../view-profile/container/ViewLayout.js";
import data from '../api.json';
import { Switch, Route,  BrowserRouter } from "react-router-dom";

import '../styles/App.css';
import '../styles/Common.css';

class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/users" component={ViewLayout}/>
                    </Switch>
                </ BrowserRouter>
            </div>
        );
/*<Home data={data}/>*/
    }
}

export default Main;