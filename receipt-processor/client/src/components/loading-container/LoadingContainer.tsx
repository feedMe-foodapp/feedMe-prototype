/* React */
import React from 'react';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

/* Ionic */
import {
    IonBackdrop
} from '@ionic/react';

/* React-Loader-Spinner */
import {
    TailSpin
} from 'react-loader-spinner'

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

/* Stylesheet */
import styles from './LoadingContainer.module.scss';

const LoadingContainer: React.FC = () => {
    const loadingState = useSelector((state: RootState) => state.loading);

    return (
        <React.Fragment>
            {loadingState.show ? (
                <IonBackdrop
                    className={styles.backdrop}
                />
            ) : undefined}
            <TailSpin
                visible={loadingState.show}
                height={92}
                width={92}
                color={'var(--ion-color-secondColor)'}
                ariaLabel="tail-spin-loading"
                radius={1}
                wrapperClass={styles.loading_container}
            />
        </React.Fragment>
    );
};

export default LoadingContainer;