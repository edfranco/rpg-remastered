import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
// internal components
import Landing from '../Components/Landing/Landing';
import Game from '../Components/Game/Game';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/rpg-remastered" component={Landing} />
            <Route path="/game-start" component={Game} />
        </Switch>
    );
};
export default withRouter(Routes);
