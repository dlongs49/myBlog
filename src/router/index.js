import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import home from '@/views/home/home';
class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes