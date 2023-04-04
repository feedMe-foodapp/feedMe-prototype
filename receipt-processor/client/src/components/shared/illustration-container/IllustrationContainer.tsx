/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

/* Model(s) */
import {
    IllustrationContainerPropsModel
} from 'src/shared/models/illustrationContainer';

/* Stylesheet */
import styles from './IllustrationContainer.module.scss';

/* Interface(s) */
interface IllustrationContainerProps {
    props: IllustrationContainerPropsModel;
}

const IllustrationContainer: React.FC<IllustrationContainerProps> = ({ props }) => {
    return (
        <div className={styles.illustration_container}>
            <IonIcon
                style={{
                    height: props.height,
                    width: props.width,
                    color: props.color
                }}
                className={styles.icon}
                icon={props.icon}
            />
        </div>
    );
};

export default IllustrationContainer;