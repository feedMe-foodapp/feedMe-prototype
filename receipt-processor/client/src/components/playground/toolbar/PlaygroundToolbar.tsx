/* React */
import React, { useState, useEffect } from 'react';

/* Ionic */
import {
    IonToolbar,
    IonIcon
} from '@ionic/react';

import {
    cloud
} from 'ionicons/icons';

/* Stylesheet */
import styles from './PlaygroundToolbar.module.scss';

/* Interface(s) */
interface PlaygroundToolbarProps {
    title: string[];
}

const enum Tabs {
    AZURE = 'Azure'
}

const PlaygroundToolbar: React.FC<PlaygroundToolbarProps> = ({ title }) => {

    // icon
    const [icon, setIcon] = useState<string>('');

    const handleIcon = (value: string[]) => {
        switch (value[1]) {
            case Tabs.AZURE:
                setIcon(cloud);
        }
    };

    useEffect(() => {
        handleIcon(title);
    }, [title]);

    return (
        <IonToolbar className={styles.playground_toolbar}>
            <div className={styles.title}>
                <IonIcon
                    className={styles.icon}
                    icon={icon}
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