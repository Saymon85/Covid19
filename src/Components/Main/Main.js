import React from 'react';
import Global from '../../Containers/Global/Global';
import Country from '../../Containers/Country/Country';
import History from '../../Containers/History/History';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Switch>
            <Route path='/' exact>
               <Global />
            </Route>   
            <Route path='/country'>
               <Country />
            </Route>
            <Route path='/history'>
              <History />
            </Route>
          </Switch>
        </div>
    )
}

export default Main;
