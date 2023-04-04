/* React */
import React from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    text
} from 'ionicons/icons'

/* Stylesheet */
import styles from './RegexFabBtn.module.scss';

const RegexFabBtn: React.FC = () => {
    return (
        <IonFabButton
            className={styles.regex_fab_btn}>
            <IonIcon 
                className={styles.icon}
                icon={text}
            />
        </IonFabButton>
    );
};

export default RegexFabBtn;