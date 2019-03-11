import React, { Component } from "react";
import Home from "../pages/containers/Home.js";
import ViewLayout from "../view-profile/container/ViewLayout.js";
import data from '../api.json';
import { Switch, Route,  BrowserRouter } from "react-router-dom";
import Layout from "../pages/components/Layout.js";
import '../styles/App.css';
import '../styles/Common.css';

const Main = () => (
    <div>
        <BrowserRouter>
            <div><Layout/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={ViewLayout}/>
            </Switch>
            </div>
            
        </ BrowserRouter>
    </div>
);
/*class Main extends Component {
    render() {
        return (
            <div>
                 <Layout/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/users" component={ViewLayout}/>
                    </Switch>
                </ BrowserRouter>
            </div>
        );
/*<Home data={data}/>
    }
}*/

export default Main;