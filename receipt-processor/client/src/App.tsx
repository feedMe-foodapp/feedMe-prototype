/* React */
import React from 'react';

/* Ionic */
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';

/* Util(s) */
import AppRouter from 'src/utils/router/AppRouter';

/* Component(s) */
import ToastContainer from 'src/components/toast-container/ToastContainer';
import LoadingContainer from 'src/components/loading-container/LoadingContainer';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <AppRouter />
      <ToastContainer />
      <LoadingContainer />
    </IonApp>
  )
}

export default App;
