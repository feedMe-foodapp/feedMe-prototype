/* React */
import React from 'react';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

/* Stylesheet */
import styles from './ModalContainerWrapper.module.scss';

/* Interface(s) */
interface ModalContainerWrapperProps {
    children: React.ReactNode[];
}

const ModalContainerWrapper: React.FC<ModalContainerWrapperProps> = ({
    children
}) => {
    return (
        <IonGrid className={styles.modal_container_wrapper}>
            <IonRow className={`${styles.row} ${styles.toolbar_row}`}>
                <IonCol
                    className={`${styles.col} ${styles.toolbar_col}`}
                    size="12">
                    {children[0]}
                </IonCol>
            </IonRow>
            <IonRow className={`${styles.row} ${styles.content_row}`}>
                <IonCol
                    className={`${styles.col} ${styles.content_col}`}
                    size="12">
                    {children[1]}
                </IonCol>
            </IonRow>
            {children[2]}
        </IonGrid>
    );
};

export default ModalContainerWrapper;