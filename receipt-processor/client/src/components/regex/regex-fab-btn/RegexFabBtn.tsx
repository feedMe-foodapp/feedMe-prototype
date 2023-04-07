/* React */
import React from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    text,
    close
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
    showFilter: boolean;
    handleFilter: Function;
}

const RegexFabBtn: React.FC<RegexFabBtnProps> = ({ 
    receipt, 
    showFilter, 
    handleFilter 
}) => {
    return (
        <IonFabButton
            className={styles.regex_fab_btn}
            disabled={!receipt}
            onClick={() => handleFilter(!showFilter)}>
            <IonIcon 
                className={styles.icon}
                icon={showFilter ? close : text}
            />
        </IonFabButton>
    );
};

export default RegexFabBtn;