import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// internal components
import Landing from '../Components/Landing/Landing';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
        </Switch>
    );
};
export default withRouter(Routes);
