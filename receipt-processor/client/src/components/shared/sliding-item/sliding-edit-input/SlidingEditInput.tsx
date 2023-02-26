/* React */
import React from 'react';

/* Ionic */
import {
    IonInput
} from '@ionic/react';

import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

/* Util(s) */
import SlidingItemWrapper from 'src/utils/wrapper/sliding-item/SlidingItemWrapper';

/* Stylesheet */
import styles from './SlidingEditInput.module.scss';

/* Interface(s) */
interface SlidingEditInputProps {
    __index: number;
    editResult: OCRAzureResultModel;
    handleEditResult: Function;
}

const SlidingEditInput: React.FC<SlidingEditInputProps> = ({
    __index,
    editResult,
    handleEditResult
}) => {
    return (
        <SlidingItemWrapper
            scssProps={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1000,
                backgroundColor: '#3A4559'
            }}>
            <React.Fragment>
                {__index}
            </React.Fragment>
            <React.Fragment>
                <IonInput
                    className={styles.sliding_edit_input}
                    placeholder={editResult.properties.description?.value}
                    onIonChange={
                        (e) => {
                            handleEditResult({
                                ...editResult, properties: {
                                    ...editResult.properties, description: {
                                        ...editResult.properties.description, value: e.detail.value?.trim()
                                    }
                                }
                            });
                        }
                    }
                />
            </React.Fragment>
        </SlidingItemWrapper>
    );
};

export default SlidingEditInput;