/* React */
import React, { useState, useEffect } from 'react';

/* React Router */
import {
    useRouteMatch
} from 'react-router-dom';

/* React-Redux */
import {
    useSelector
} from 'react-redux';

/* Ionic */
import {
    IonGrid,
    IonRow,
    IonCol,
    IonCard
} from '@ionic/react';

/* Model(s) */
import {
    PlaygroundTab
} from 'src/shared/models/playgroundTab';

import {
    OptionFabBtnModel
} from 'src/shared/models/optionFabBtn';

/* Mock(s) */
import {
    OPTION_FAB_BTN
} from 'src/shared/mocks/optionFabBtn';

import {
    RootState
} from 'src/redux/store';

/* Component(s) */
import PlaygroundToolbar from 'src/components/playground/toolbar/PlaygroundToolbar';
import RegexFabButton from 'src/components/regex-fab-btn/RegexFabBtn';
import OptionFabContainer from 'src/components/shared/option-fab-container/OptionFabContainer';

/* Stylesheet */
import styles from './PlaygroundTabWrapper.module.scss';

/* Interface(s) */
interface PlaygroundTabWrapperProps {
    children: React.ReactNode[];
}

const PlaygroundTabWrapper: React.FC<PlaygroundTabWrapperProps> = ({ children }) => {
    const { path } = useRouteMatch();
    const optionFabBtn: OptionFabBtnModel[] = OPTION_FAB_BTN;
    const receiptState = useSelector((state: RootState) => state.receipt);

    // title
    const [title, setTitle] = useState<string[]>([]);

    const handleTitle = (value: string[]) => {
        setTitle(['Playground', value[2].charAt(0).toUpperCase() + value[2].slice(1)]);
    };

    useEffect(() => {
        handleTitle(path.split('/'));
    }, [path]);

    return (
        <React.Fragment>
            <PlaygroundToolbar
                title={title}
            />
            <IonGrid className={`${styles.playground_tab_wrapper} scroll`}>
                <IonRow className={styles.row}>
                    {children.map((child: React.ReactNode, __index: number) => {
                        return (
                            <IonCol
                                key={__index}
                                className={styles.col}
                                sizeXs="12"
                                sizeXl="4">
                                <IonCard
                                    className={styles.card}>
                                    {child}
                                    {__index === 1 && path.includes(PlaygroundTab.TESSERACT) ? (
                                        <RegexFabButton 
                                        
                                        />
                                    ) : undefined}
                                    {__index === 2 ? (
                                        <OptionFabContainer
                                            optionFabBtn={optionFabBtn}
                                            receipt={receiptState.receipt!}
                                        />
                                    ) : undefined}
                                </IonCard>
                            </IonCol>
                        )
                    })}
                </IonRow>
            </IonGrid>
        </React.Fragment>
    );
};

export default PlaygroundTabWrapper;