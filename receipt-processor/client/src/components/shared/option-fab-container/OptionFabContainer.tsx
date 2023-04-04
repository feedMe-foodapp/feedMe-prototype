/* React */
import React, { useState } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon,
    IonFabList
} from '@ionic/react';

import {
    settings
} from 'ionicons/icons';

/* Model(s) */
import {
    OptionFabBtnModel
} from 'src/shared/models/optionFabBtn';

import {
    ReceiptModel
} from 'src/shared/models/receipt';

/* Mock(s) */
import {
    OptionFabKey
} from 'src/shared/mocks/optionFabBtn';

/* Component(s) */
import ReceiptUploader from 'src/components/ocr/receipt-uploader/ReceiptUploader';

/* Stylesheet */
import styles from './OptionFabContainer.module.scss';

/* Interface(s) */
interface OptionFabContainerProps {
    optionFabBtn: OptionFabBtnModel[];
    receipt: ReceiptModel;
}

const OptionFabContainer: React.FC<OptionFabContainerProps> = ({ optionFabBtn, receipt }) => {
    const dispatch = useDispatch();

    // showFabList
    const [showFabList, setShowFabList] = useState<boolean>(false);

    return (
        <IonFab
            className={styles.fab_list_btn}
            vertical="bottom"
            horizontal="end" >
            <IonFabButton
                className={styles.fab_btn}
                onClick={
                    () => {
                        setShowFabList(!showFabList);
                    }
                }>
                <IonIcon
                    className={`${styles.icon}`}
                    icon={settings}
                />
            </IonFabButton>
            <IonFabList
                className={styles.fab_list}
                side="top"
                onClick={
                    () => {
                        setShowFabList(false);
                    }
                }>
                {optionFabBtn.map((optionFabBtn: OptionFabBtnModel, __index: number) => {
                    return (
                        <IonFabButton
                            key={__index}
                            style={{
                                '--background': optionFabBtn.backgroundColor,
                                opacity: optionFabBtn.key === OptionFabKey.DELETE
                                    && !receipt ? 0.5 : 1
                            }}
                            className={styles.fab_list_btn}
                            onClick={
                                () => {
                                    optionFabBtn.click(dispatch, receipt);
                                }
                            }
                            disabled={optionFabBtn.key === OptionFabKey.DELETE && !receipt}>
                            <IonIcon
                                className={styles.icon}
                                icon={optionFabBtn.icon}
                            />
                        </IonFabButton>
                    )
                })}
                <ReceiptUploader
                    color={'#ffffff'}
                    backgroundColor={'var(--ion-color-secondColor)'}
                />
            </IonFabList>
        </IonFab>
    );
};

export default OptionFabContainer;