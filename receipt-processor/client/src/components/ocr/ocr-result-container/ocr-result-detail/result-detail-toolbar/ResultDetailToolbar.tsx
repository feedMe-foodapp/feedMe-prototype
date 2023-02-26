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
    IonIcon,
    IonFabButton
} from '@ionic/react';

import {
    fastFood,
    close
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ResultDetailToolbar.module.scss';

/* Interface(s) */
interface ResultDetailToolbarProps {
    name: string;
}

const ResultDetailToolbar: React.FC<ResultDetailToolbarProps> = ({
    name
}) => {
    const dispatch = useDispatch();

    return (
        <div className={`${styles.result_detail_toolbar} shadow`}>
            <div className={styles.name}>
                <IonIcon
                    className={styles.icon}
                    icon={fastFood}
                />
                <h5>
                    {name}
                </h5>
            </div>
            <IonFabButton 
                className={styles.fab_btn}
                onClick={
                    () => {
                        dispatch(showModal(false));
                    }
                }>
                <IonIcon 
                    className={styles.icon}
                    icon={close}
                />
            </IonFabButton>
        </div>
    );
};

export default ResultDetailToolbar;