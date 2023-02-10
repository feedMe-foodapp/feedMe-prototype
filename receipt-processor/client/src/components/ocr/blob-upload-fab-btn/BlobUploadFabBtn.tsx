/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    setLoading
} from 'src/redux/features/loadingSlice';

import {
    setToast
} from 'src/redux/features/toastSlice';

import {
    setReceipt
} from 'src/redux/features/receiptSlice';

/* Axios */
import {
    AxiosResponse
} from 'axios';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    cloudUpload,
    checkmarkCircle
} from 'ionicons/icons';

/* Util(s) */
import {
    ServiceLoader
} from 'src/utils/services/serviceLoader';

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
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {!receipt.uploadedToBlobStorage ? (
                <IonFabButton
                    className={styles.blob_upload_fab_btn}
                    disabled={receipt.uploadedToBlobStorage}
                    onClick={
                        () => {
                            dispatch(setLoading(true));
                            ServiceLoader.azure().uploadReceipt(receipt)
                                .then((response: AxiosResponse) => {
                                    dispatch(setLoading(false));
                                    dispatch(setToast({
                                        show: true,
                                        content: {
                                            icon: checkmarkCircle,
                                            message: response.data.statusMessage,
                                            color: 'var(--ion-color-successColor)'
                                        }
                                    }));
                                    dispatch(setReceipt({ ...receipt, uploadedToBlobStorage: true }));
                                });
                        }
                    }>
                    <IonIcon
                        icon={cloudUpload}
                    />
                </IonFabButton>
            ) : undefined}
        </React.Fragment>
    );
};

export default BlobUploadFabBtn;