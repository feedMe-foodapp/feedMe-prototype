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

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

/* Stylesheet */
import styles from './RegexFabBtn.module.scss';

/* Interface(s) */
interface RegexFabBtnProps {
    receipt: ReceiptModel;
}

const RegexFabBtn: React.FC<RegexFabBtnProps> = ({ receipt }) => {
    return (
        <IonFabButton
            className={styles.regex_fab_btn}
            disabled={!receipt}>
            <IonIcon 
                className={styles.icon}
                icon={text}
            />
        </IonFabButton>
    );
};

export default RegexFabBtn;