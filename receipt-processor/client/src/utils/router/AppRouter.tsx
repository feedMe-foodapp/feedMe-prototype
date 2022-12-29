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
import PlaygroundPage from 'src/pages/playground/PlaygroundPage';

const AppRouter: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet id="app-menu">
                <Route path="/playground">
                    <PlaygroundPage />
                </Route>
                <Route render={() => <Redirect to="/playground" />} />
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default AppRouter;