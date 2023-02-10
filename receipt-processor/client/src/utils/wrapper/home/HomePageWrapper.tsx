/* React */
import React from 'react';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

/* Stylesheet */
import styles from './HomePageWrapper.module.scss';

/* Interface(s) */
interface HomePageWrapperProps {
    children: React.ReactNode[];
}

const HomePageWrapper: React.FC<HomePageWrapperProps> = ({ children }) => {
    return (
        <IonGrid className={styles.home_page_wrapper}>
            <IonRow className={styles.row}>
                <IonCol 
                    className={`${styles.col} ${styles.desktop_col}`}
                    sizeXs="0"
                    sizeXl="6">
                    {children[0]}
                </IonCol>
                <IonCol 
                    className={`${styles.col}`}
                    sizeXs="12"
                    sizeXl="6">
                    {children[1]}
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default HomePageWrapper;