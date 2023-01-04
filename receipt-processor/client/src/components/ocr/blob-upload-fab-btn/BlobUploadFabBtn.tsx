/* React */
import React from 'react';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    cloudUpload
} from 'ionicons/icons';

/* Model(s) */
import { 
    ReceiptModel 
} from 'src/shared/models/receipt';

/* Stylesheet */
import styles from './BlobUploadFabBtn.module.scss';

/* Interface(s) */
interface BlobUploadFabBtnModel {
    receipt: ReceiptModel;
}

const BlobUploadFabBtn: React.FC<BlobUploadFabBtnModel> = ({ receipt }) => {
    return (
        <IonFabButton
            className={styles.blob_upload_fab_btn}
            disabled={receipt.uploadedToBlobStorage}>
            <IonIcon 
                icon={cloudUpload}
            />
        </IonFabButton>
    );
};  

export default BlobUploadFabBtn;