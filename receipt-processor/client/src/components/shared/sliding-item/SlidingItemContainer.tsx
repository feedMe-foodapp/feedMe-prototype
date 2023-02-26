/* React */
import React, { useRef, useState } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

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
    result: OCRAzureResultModel[];
}

const SlidingItemContainer: React.FC<SlidingItemContainerProps> = ({
    result
}) => {
    const slidingItemRef = useRef<HTMLIonItemSlidingElement>(null);
    const dispatch = useDispatch();
    const slidingEditItemOption: SlidingItemOptionModel[] = SLIDING_EDIT_ITEM_OPTION;
    const slidingItemOption: SlidingItemOptionModel[] = SLIDING_ITEM_OPTION;

    // editResult
    const [editResult, setEditResult] = useState<OCRAzureResultModel | undefined>(undefined);

    const handleEditResult = (value: OCRAzureResultModel) => {
        setEditResult(value);
    };

    const onEdit = (result: OCRAzureResultModel) => editResult?.id === result.id ? true : false;
    
    return (
        <IonList className={`${styles.sliding_item_container} scroll`}>
            {result.map((result: OCRAzureResultModel, __index: number) => {
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
                                    // to prevent opening modal when editable item gets clicked
                                    if(!onEdit(result)) {
                                        dispatch(showModal(true));
                                    }
                                    dispatch(setOCRAzureResultDetail(result));
                                }
                            }>
                            <SlidingItemWrapper>
                                <React.Fragment>
                                    {__index + 1}
                                </React.Fragment>
                                <div className={styles.value}>
                                    {result.properties.description?.value}
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
                        <IonItemOptions side="end">
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
                                                        /*** 
                                                        * close IonItemSliding and set editResult undefined to 
                                                        * ensure default behaviour of IonItem
                                                        ***/ 
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
                        </IonItemOptions>
                    </IonItemSliding>
                );
            })}
        </IonList >
    );
};

export default SlidingItemContainer;