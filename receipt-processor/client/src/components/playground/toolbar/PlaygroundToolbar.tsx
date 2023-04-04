/* React */
import React from 'react';

/* React Router */
import {
    useRouteMatch
} from 'react-router-dom';

/* Ionic */
import {
    IonToolbar,
    IonIcon
} from '@ionic/react';

import {
    receipt,
    cloud
} from 'ionicons/icons';

/* Model(s) */
import {
    PlaygroundTab
} from 'src/shared/models/playgroundTab';

/* Stylesheet */
import styles from './PlaygroundToolbar.module.scss';

/* Interface(s) */
interface PlaygroundToolbarProps {
    title: string[];
}

const PlaygroundToolbar: React.FC<PlaygroundToolbarProps> = ({ title }) => {
    const { path } = useRouteMatch();

    return (
        <IonToolbar className={styles.playground_toolbar}>
            <div className={styles.title}>
                <IonIcon
                    className={styles.icon}
                    icon={path.includes(PlaygroundTab.TESSERACT) ? receipt : cloud}
                />
                <span className={styles.first_span}>
                    {title[0]}
                </span>
                <span className={styles.second_span}>
                    {title[1]}
                </span>
            </div>
        </IonToolbar>
    );
};

export default PlaygroundToolbar;