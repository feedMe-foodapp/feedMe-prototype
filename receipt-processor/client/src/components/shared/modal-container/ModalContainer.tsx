/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    showModal
} from 'src/redux/features/modalSlice';

/* Ionic */
import {
    IonModal
} from '@ionic/react';

/* Stylesheet */
import styles from './ModalContainer.module.scss';

/* Interface(s) */
interface ModalContainerProps {
    show: boolean;
    children: React.ReactNode;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
    show,
    children
}) => {
    const dispatch = useDispatch();

    return (
        <IonModal
            isOpen={show}
            className={styles.modal_container}
            onDidDismiss={
                () => {
                    dispatch(showModal(false));
                }
            }>
            {children}
        </IonModal >
    );
};

export default ModalContainer;