/* React */
import React from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

/* Model(s) */
import {
    Tooltip
} from 'src/shared/models/tooltip';

/* Component(s) */
import TooltipContainer from 'src/components/shared/tooltip/TooltipContainer';

/* Stylesheet */
import styles from './ProcessBtnContainer.module.scss';

/* Interface(s) */
interface ProcessBtn {
    label: string;
    icon?: string;
    disabled?: boolean;
    click: () => void;
}

const ProcessBtnContainer: React.FC<ProcessBtn> = ({
    label,
    icon,
    disabled,
    click
}) => {
    return (
        <div className={styles.process_btn_container}>
            <TooltipContainer
                id={Tooltip.OCR_PROCESSOR}
                scssProps={{
                    top: '-72px',
                    width: '100%'
                }}
            />
            <div
                style={{ color: disabled ? '#d5dae4' : 'var(--ion-color-secondTextColor)' }}
                className={styles.label}>
                {label}
            </div>
            {/* <div onClick={disabled ? click : undefined}> */}
                <IonFabButton
                    className={styles.process_btn}
                    disabled={disabled}
                    onClick={click}>
                    <IonIcon
                        className={styles.icon}
                        icon={icon}
                    />
                </IonFabButton>
            </div>
        // </div>
    );
};

export default ProcessBtnContainer;