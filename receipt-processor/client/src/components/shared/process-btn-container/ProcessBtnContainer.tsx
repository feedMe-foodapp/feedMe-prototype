/* React */
import React from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

/* Stylesheet */
import styles from './ProcessBtnContainer.module.scss';

/* Interface(s) */
interface ProcessBtn {
    label: string;
    icon?: string;
    disabled?: boolean;
}

const ProcessBtnContainer: React.FC<ProcessBtn> = ({
    label,
    icon,
    disabled
}) => {
    return (
        <div className={styles.process_btn_container}>
            <div 
                style={{color: disabled ? '#d5dae4' : 'var(--ion-color-secondTextColor)'}}
                className={styles.label}>
                {label}
            </div>
            <IonFabButton
                className={styles.process_btn}
                disabled={disabled}>
                <IonIcon
                    className={styles.icon}
                    icon={icon}
                />
            </IonFabButton>
        </div>
    )
}

export default ProcessBtnContainer;