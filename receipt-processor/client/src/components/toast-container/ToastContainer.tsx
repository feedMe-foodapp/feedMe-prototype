/* React */
import React, { useEffect } from 'react';

/* React Redux */
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    setToast
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
        const timer = setTimeout(() => {
            if(toastState.show) {
                dispatch(setToast({show: false}));
            }
        }, 9000);
        /***
        * Always clear the timeout when the component unounts
        * Otherwise, the code in the callback may be executed when the component isn't visible anymore
        * It can also lead to memory leaks in the application. Since the timeout is still active after
        * the component unmounts, the garbage collector won't collect the component.
        * 
        * https://felixgerschau.com/react-hooks-settimeout/
        ***/
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <React.Fragment>
            {toastState.show ? (
                <div
                    style={{ background: toastState.content?.color }}
                    className={`${styles.toast_container}`}>
                    <div className={styles.toast}>
                        <div className={styles.message}>
                            <IonIcon
                                className={styles.icon}
                                icon={toastState.content?.icon}
                            />
                            {toastState.content?.message}
                        </div>
                        <IonFabButton
                            className={styles.fab_btn}
                            onClick={
                                () => {
                                    dispatch(setToast({show: false}))
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