/* React */
import React from 'react';

/* React Router */
import {
    useRouteMatch,
    Route,
    Redirect
} from 'react-router-dom';

/* React Redux */
import { 
    useSelector
} from 'react-redux';

/* Ionic */
import {
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon
} from '@ionic/react';

import {
    IonReactRouter
} from '@ionic/react-router';

import {
    receipt,
    cloud
} from 'ionicons/icons';

import {
    RootState
} from 'src/redux/store';

/* Model(s) */
import { 
    PlaygroundTab 
} from 'src/shared/models/playgroundTab'; 

/* Tab(s) */
import TesseractTab from 'src/pages/tabs/tesseract/TesseractTab';
import AzureTab from 'src/pages/tabs/azure/AzureTab';

/* Stylesheet */
import styles from './PlaygroundPage.module.scss';

const PlaygroundPage: React.FC = () => {
    const { path } = useRouteMatch();
    const receiptState = useSelector((state: RootState) => state.receipt);

    return (
        <IonReactRouter>
            {/* Tab Layout */}
            <IonTabs className={styles.tabs}>
                <IonRouterOutlet>
                    <Route exact path={`${path}/${PlaygroundTab.TESSERACT}`}>
                        <TesseractTab 
                            receipt={receiptState.receipt!}
                        />
                    </Route>
                    <Route exact path={`${path}/${PlaygroundTab.AZURE}`}>
                        <AzureTab 
                            receipt={receiptState.receipt!}
                        />
                    </Route>
                    <Route
                        render={() => <Redirect to={`${path}/${PlaygroundTab.AZURE}`} />}
                    />
                </IonRouterOutlet>
                <IonTabBar
                    className={styles.tab_bar}
                    slot="bottom">
                    <IonTabButton
                        className={styles.tab_btn}
                        tab="tesseract"
                        href={`${path}/${PlaygroundTab.TESSERACT}`}>
                        <IonIcon 
                            className={styles.icon}
                            icon={receipt}
                        />
                    </IonTabButton>
                    <IonTabButton
                        className={styles.tab_btn}
                        tab="azure"
                        href={`${path}/${PlaygroundTab.AZURE}`}>
                        <IonIcon
                            className={styles.icon}
                            icon={cloud}
                        />
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default PlaygroundPage;