/* React */
import React from 'react';

/* React Router */
import {
    useRouteMatch
} from 'react-router-dom';

/* Ionic */
import {
    imagesSharp
} from 'ionicons/icons';

/* React-Zoom-Pan-Pinch */
import {
    TransformWrapper,
    TransformComponent
} from '@pronestor/react-zoom-pan-pinch';

/* Model(s) */
import {
    PlaygroundTab
} from 'src/shared/models/playgroundTab';

import {
    ReceiptModel
} from 'src/shared/models/receipt';

/* Component(s) */
import IllustrationContainer from 'src/components/shared/illustration-container/IllustrationContainer';
import BlobUploadFabBtn from 'src/components/ocr/blob-upload-fab-btn/BlobUploadFabBtn';

/* Stylesheet */
import styles from './ReceiptPreview.module.scss';

/* Interface(s) */
interface ReceiptPreviewProps {
    receipt: ReceiptModel;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ receipt }) => {
    const { path } = useRouteMatch();

    return (
        <div className={styles.receipt_preview}>
            {receipt ? (
                <React.Fragment>
                    <TransformWrapper>
                        <TransformComponent
                            wrapperClass={styles.wrapper_container}
                            contentClass={styles.content_container}>
                            <img
                                className={`${styles.receipt_img}`}
                                src={receipt.content}
                                alt="Receipt Preview"
                            />
                        </TransformComponent>
                    </TransformWrapper>
                    {path.includes(PlaygroundTab.AZURE) ? (
                        <BlobUploadFabBtn
                            receipt={receipt}
                        />
                    ): undefined}
                </React.Fragment>
            ) : (
                <IllustrationContainer
                    props={{
                        icon: imagesSharp,
                        height: '172px',
                        width: '172px',
                        color: '#414e65',
                        label: 'No preview to show yet',
                        fontSize: '18px',
                        fontColor: '#495771'
                    }}
                />
            )}
        </div>
    );
};

export default ReceiptPreview;