/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

/* Stylesheet */
import styles from './LabelContainer.module.scss';

/* Interface(s) */
interface LabelContainerProps {
    icon: string;
    label: string;
}

const LabelContainer: React.FC<LabelContainerProps> = ({
    label,
    icon
}) => {
    return (
        <div className={styles.label_container}>
            <IonIcon 
                className={styles.icon}
                icon={icon}
            />
            <h4 className={styles.label}>
                {label}
            </h4>
        </div>
    );
};

export default LabelContainer;