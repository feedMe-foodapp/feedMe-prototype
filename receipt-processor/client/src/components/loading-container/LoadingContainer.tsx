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
    const keyValueState = useSelector((state: RootState) => state.keyValue);

    return (
        <React.Fragment>
            {keyValueState.loading.content.show ? (
                <IonBackdrop
                    className={styles.backdrop}
                />
            ) : undefined}
            <TailSpin
                visible={keyValueState.loading.content.show}
                height={96}
                width={96}
                color={'var(--ion-color-secondColor)'}
                ariaLabel="tail-spin-loading"
                radius={1}
                wrapperClass={styles.loading_container}
            />
        </React.Fragment>
    );
};

export default LoadingContainer;