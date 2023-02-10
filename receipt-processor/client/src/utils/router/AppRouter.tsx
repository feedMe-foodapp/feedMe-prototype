/* React */
import React from 'react';

/* React-Router */
import { 
    Route, 
    Redirect
  } from 'react-router-dom';

/* Ionic */
import {
    IonRouterOutlet
} from '@ionic/react';

import {
    IonReactRouter
} from '@ionic/react-router';

/* Page(s) */
import HomePage from 'src/pages/home/HomePage';
import PlaygroundPage from 'src/pages/playground/PlaygroundPage';

const AppRouter: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet id="app-menu">
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/playground">
                    <PlaygroundPage />
                </Route>
                <Route render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default AppRouter;