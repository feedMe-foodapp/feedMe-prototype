/* React */
import React, { useState } from 'react';

/* Ionic */
import {
    IonCard,
    IonGrid,
    IonRow,
    IonBackdrop
} from '@ionic/react';

/* Model(s) */
import {
    ReceiptModel
} from 'src/shared/models/receipt';

import {
    RegexFilterModel
} from 'src/shared/models/regexFilter';

/* Mock(s) */
import {
    REGEX_FILTER
} from 'src/shared/mocks/regexFilter';

/* Component(s) */
import RegexFabBtn from 'src/components/regex/regex-fab-btn/RegexFabBtn';
import RegexFilterItem from 'src/components/regex/regex-filter/regex-filter-item/RegexFilterItem';

/* Stylesheet */
import styles from './RegexFilter.module.scss';

/* Interface(s) */
interface RegexFilterProps {
    receipt: ReceiptModel
}

const RegexFilter: React.FC<RegexFilterProps> = ({ receipt }) => {
    const regexFilter: RegexFilterModel[] = REGEX_FILTER;

    // showFilter
    const [showFilter, setShowFilter] = useState<boolean>(false);

    const handleFilter = (value: boolean) => {
        setShowFilter(value);
    };

    return (
        <div className={styles.regex_filter}>
            {showFilter ? (
                <React.Fragment>
                    <IonBackdrop
                        className={styles.backdrop}
                    />
                    <IonCard className={styles.card}>
                        <div className={`${styles.label_container} shadow`}>
                            <div className={styles.label}>
                                Regex Filter
                            </div>
                        </div>
                        <IonGrid className={styles.grid_container}>
                            <IonRow className={styles.row}>
                                {regexFilter.map((regex: RegexFilterModel, __index: number) => {
                                    return (
                                        <RegexFilterItem
                                            key={__index}
                                            regex={regex}
                                        />
                                    );
                                })}
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                </React.Fragment>
            ) : undefined}
            <RegexFabBtn
                receipt={receipt}
                showFilter={showFilter}
                handleFilter={handleFilter}
            />
        </div>
    );
};

export default RegexFilter;