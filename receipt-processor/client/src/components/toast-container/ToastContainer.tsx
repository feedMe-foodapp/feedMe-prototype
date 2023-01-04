/* React */
import React, { useEffect } from 'react';

/* React Redux */
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    showToast
} from 'src/redux/features/toastSlice';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    close
} from 'ionicons/icons';

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

/* Stylesheet */
import styles from './ToastContainer.module.scss';

const ToastContainer: React.FC = () => {
    const toastState = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(showToast(false));
        }, 9500);
    });

    return (
        <React.Fragment>
            {toastState.show ? (
                <div
                    style={{ background: toastState.content.color }}
                    className={styles.toast_container}>
                    <div className={styles.toast}>
                        <div className={styles.message}>
                            <IonIcon 
                                className={styles.icon}
                                icon={toastState.content.icon}
                            />
                            {toastState.content.message}
                        </div>
                        <IonFabButton
                            className={styles.fab_btn}
                            onClick={
                                () => {
                                    dispatch(showToast(false));
                                }
                            }>
                            <IonIcon
                                className={styles.icon}
                                icon={close}
                            />
                        </IonFabButton>
                    </div>
                </div>
            ) : undefined}
        </React.Fragment>
    );
};

export default ToastContainer;


/* 

                                    <IonFabButton
                                        className={styles.close_btn}
                                        onClick={
                                            () => {

                                            }
                                        }>
                                        <IonIcon
                                            className={styles.icon}
                                            icon={close}
                                        />
                                    </IonFabButton>*/