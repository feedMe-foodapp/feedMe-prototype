/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    replaceTooltip,
    setTooltip
} from 'src/redux/features/tooltipSlice';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
} from '@ionic/react';

import {
    informationCircle
} from 'ionicons/icons';

/* Model(s) */
import {
    RootState
} from 'src/redux/store';

import {
    Tooltip
} from 'src/shared/models/tooltip';

/* Stylesheet */
import styles from './TooltipContainer.module.scss';

/* Interface(s) */
interface scssPropsModel {
    top?: string;
    width?: string;
}

interface TooltipContainerProps {
    id: Tooltip;
    scssProps?: scssPropsModel;
}

const TooltipContainer: React.FC<TooltipContainerProps> = ({
    id,
    scssProps
}) => {

    const tooltipState = useSelector((state: RootState) => state.tooltip);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // const array = [...tooltipState.tooltip];
        
        const timer = setTimeout(() => {
            // const index = array.findIndex(obj => obj.id === id);

            // if(index > -1) {
            //     array.splice(index, 1);
                // dispatch(replaceTooltip(array));
            // }

            dispatch(replaceTooltip([{
                id: Tooltip.DEFAULT,
                content: {
                    message: '',
                }
            }]));
        }, 10000);

        return () => {
            clearTimeout(timer);
        }
    });

    const tmpTooltip = (tooltipState.tooltip.find(tooltip => tooltip.id === id));

    return (
        <React.Fragment>
            {tmpTooltip ? (
                <div
                    style={{ 
                        top: scssProps?.top,
                        width: scssProps?.width
                    }}
                    className={`${styles.tooltip_container} shadow`}>
                    <IonGrid className={styles.grid_container}>
                        <IonRow>
                            <IonCol
                                className={`${styles.col} ${styles.icon_col}`}
                                size="2">
                                <IonIcon
                                    className={styles.icon}
                                    icon={informationCircle}
                                />
                            </IonCol>
                            <IonCol
                                className={`${styles.col}`}
                                size="10">
                                <div className={styles.message}>
                                    {tmpTooltip?.content?.message}
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            ) : undefined}
        </React.Fragment>
    );
};

export default TooltipContainer;