/* React */
import React, { useRef, useState } from 'react';

/* React Router */
import {
    useRouteMatch
} from 'react-router-dom';

/* React Redux */
import {
    showModal
} from 'src/redux/features/modalSlice';

import {
    setOCRAzureResultDetail
} from 'src/redux/features/ocrAzureResultSlice';

/* Ionic */
import {
    IonList,
    IonItemSliding,
    IonItem,
    IonItemOptions,
    IonItemOption,
    IonIcon
} from '@ionic/react';

/* Model(s) */
import {
    PlaygroundTab
} from 'src/shared/models/playgroundTab';

import {
    OCRTesseractResultModel
} from 'src/shared/models/ocrTesseractResult';

import {
    OCRAzureResultModel
} from 'src/shared/models/ocrAzureResult';

import {
    SlidingItemOptionModel,
    SlidingItem
} from 'src/shared/models/slidingItemOption';

/* Mock(s) */
import {
    SLIDING_EDIT_ITEM_OPTION,
    SLIDING_ITEM_OPTION
} from 'src/shared/mocks/slidingItemOption';

/* Util(s) */
import SlidingItemWrapper from 'src/utils/wrapper/sliding-item/SlidingItemWrapper';

/* Component(s) */
import SlidingEditInput from 'src/components/shared/sliding-item/sliding-edit-input/SlidingEditInput';

/* Stylesheet */
import styles from './SlidingItemContainer.module.scss';

/* Interface(s) */
interface SlidingItemContainerProps {
    ocrResult: OCRTesseractResultModel[] | OCRAzureResultModel[];
    click: Function;
}

const SlidingItemContainer: React.FC<SlidingItemContainerProps> = ({
    ocrResult,
    click
}) => {
    const { path } = useRouteMatch();
    const slidingItemRef = useRef<HTMLIonItemSlidingElement>(null);
    const slidingEditItemOption: SlidingItemOptionModel[] = SLIDING_EDIT_ITEM_OPTION;
    const slidingItemOption: SlidingItemOptionModel[] = SLIDING_ITEM_OPTION;

    // editResult
    const [editResult, setEditResult] = useState<OCRAzureResultModel | undefined>(undefined);

    const handleEditResult = (value: OCRAzureResultModel) => {
        setEditResult(value);
    };

    const onEdit = (result: OCRAzureResultModel) => editResult?.id === result.id ? true : false;

    return (
        <React.Fragment>

            <IonList className={`${styles.sliding_item_container} scroll`}>
                {ocrResult.map((result: any, __index: number) => {
                    return (
                        <IonItemSliding
                            ref={slidingItemRef}
                            key={__index}
                            className={styles.sliding_item}>
                            <IonItem
                                className={styles.result_item}
                                lines="none"
                                button={onEdit(result) ? false : true}
                                onClick={
                                    () => {
                                        click(result);
                                    }
                                }>
                                <SlidingItemWrapper>
                                    <React.Fragment>
                                        {__index + 1}
                                    </React.Fragment>
                                    <div className={styles.value}>
                                        {path.includes(PlaygroundTab.TESSERACT) ? result.text : result.properties.description?.value}
                                    </div>
                                </SlidingItemWrapper>
                                {onEdit(result) ? (
                                    <SlidingEditInput
                                        __index={__index + 1}
                                        editResult={editResult!}
                                        handleEditResult={handleEditResult}
                                    />
                                ) : undefined}
                            </IonItem>
                            {/* <IonItemOptions side="end">
                                    {onEdit(result) ? (
                                        <React.Fragment>
                                            {slidingEditItemOption.map((slidingEditItemOption: SlidingItemOptionModel, __index: number) => {
                                                return (
                                                    <IonItemOption
                                                        key={__index}
                                                        style={{ '--background': slidingEditItemOption.color }}
                                                        className={styles.item_option}
                                                        onClick={
                                                            () => {
                                                                if (slidingEditItemOption.name === SlidingItem.CONFIRM) {
                                                                    slidingEditItemOption.click!(dispatch, editResult);
                                                                }
                                                                slidingItemRef.current?.closeOpened();
                                                                setEditResult(undefined);
                                                            }
                                                        }>
                                                        <IonIcon
                                                            className={styles.icon}
                                                            icon={slidingEditItemOption.icon}
                                                        />
                                                    </IonItemOption>
                                                );
                                            })}
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            {slidingItemOption.map((slidingItemOption: SlidingItemOptionModel, __index: number) => {
                                                return (
                                                    <IonItemOption
                                                        key={__index}
                                                        style={{ '--background': slidingItemOption.color }}
                                                        className={styles.item_option}
                                                        onClick={
                                                            () => {
                                                                if (slidingItemOption.name === SlidingItem.DELETE) {
                                                                    slidingItemOption.click!(dispatch, result.id);
                                                                } else {
                                                                    setEditResult(result);
                                                                }
                                                                slidingItemRef.current?.closeOpened();
                                                            }
                                                        }>
                                                        <IonIcon
                                                            className={styles.icon}
                                                            icon={slidingItemOption.icon}
                                                        />
                                                    </IonItemOption>
                                                );
                                            })}
                                        </React.Fragment>
                                    )}
                                </IonItemOptions> */}
                        </IonItemSliding>
                    );
                })}
            </IonList>
        </React.Fragment>
    );
};

export default SlidingItemContainer;