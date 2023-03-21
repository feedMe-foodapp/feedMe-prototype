/* React */
import React from 'react';

/* Ionic */
import {
    IonInput
} from '@ionic/react';

/* Stylesheet */
import styles from './LabeledInput.module.scss';

/* Interface(s) */
interface LabeledInputProps {
    label: string;
    value: number | string;
    unit?: string;
    disabled: boolean;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
    label,
    value,
    unit,
    disabled
}) => {
    const placeholder = unit ? value + ' ' + unit : value;
    return (
        <React.Fragment>
            <div className={styles.label_container}>
                <h5 className={styles.label}>
                    {label}
                </h5>
            </div>
            <IonInput 
                className={styles.label_input}
                placeholder={placeholder as string}
                disabled={disabled}   
            />
        </React.Fragment>
    );
};

export default LabeledInput;