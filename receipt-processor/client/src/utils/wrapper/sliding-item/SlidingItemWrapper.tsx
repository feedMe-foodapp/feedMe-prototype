/* React */
import React from 'react';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

/* Stylesheet */
import styles from './SlidingItemWrapper.module.scss';

/* Interface(s) */
interface ScssPropsModel {
    position?: string;
    top?: number;
    left?: number;
    zIndex?: number;
    backgroundColor?: string;
}

interface SlidingItemWrapperProps {
    children: React.ReactNode[];
    scssProps?: ScssPropsModel;
}

const SlidingItemWrapper: React.FC<SlidingItemWrapperProps> = ({
    children,
    scssProps
}) => {
    return (
        <IonGrid className={styles.grid_container}>
            <IonRow 
                style={{
                    position: scssProps?.position,
                    top: scssProps?.top,
                    left: scssProps?.left,
                    zIndex: scssProps?.zIndex,
                    backgroundColor: scssProps?.backgroundColor
                }}
                className={styles.row}>
                <IonCol
                    className={`${styles.col}`}
                    size="1">
                    <div className={styles.line}>
                        {children[0]}
                    </div>
                </IonCol>
                <IonCol
                    size="11"
                    className={`${styles.col}`}>
                    {children[1]}
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default SlidingItemWrapper;