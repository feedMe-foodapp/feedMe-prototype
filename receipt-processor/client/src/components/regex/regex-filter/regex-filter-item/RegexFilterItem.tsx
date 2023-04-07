/* React */
import React from 'react';

/* React Redux */
import {
    useSelector,
    useDispatch 
} from 'react-redux';

import {
    setRegexFilter
} from 'src/redux/features/regexFilterSlice';
 
/* Ionic */
import {
    IonItem,
    IonCol,
    IonCheckbox
} from '@ionic/react';

/* Model(s) */
import { 
    RegexFilterModel 
} from 'src/shared/models/regexFilter';

import { 
    RootState 
} from 'src/redux/store';

/* Stylesheet */
import styles from './RegexFilterItem.module.scss';

/* Interface(s) */
interface RegexFilterItemProps {
    regex: RegexFilterModel,
}

const RegexFilterItem: React.FC<RegexFilterItemProps> = ({
    regex
}) => {
    const regexState = useSelector((state: RootState) => state.regexFilter);
    console.log(regexState.regexFilter.map(r => r.checked))
    const dispatch = useDispatch();

    return (
        <IonItem
            className={styles.regex_filter_item}
            lines="full">
            <IonCol
                className={`${styles.col}`}>
                <div className={styles.label}>
                    {regex.name}
                </div>
            </IonCol>
            <IonCol className={`${styles.col} ${styles.checkbox_col}`}>
                <IonCheckbox
                    key={regex.id}
                    className={styles.checkbox}
                    // checked={}
                    onIonChange={
                        (e) => {
                            dispatch(setRegexFilter({id: regex.id, name: regex.name, checked: e.detail.checked}));
                        }
                    }
                />
            </IonCol>
        </IonItem>
    );
};

export default RegexFilterItem;