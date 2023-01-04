/* React */
import React from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    uploadReceipt
} from 'src/redux/features/receiptSlice';

/* Ionic */
import {
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    camera
} from 'ionicons/icons';

/* Capacitor */
import {
    Camera,
    CameraSource,
    CameraResultType
} from '@capacitor/camera';

/* uuid */
import { 
    v4 as uuidv4 
} from 'uuid';

/* Stylesheet */
import styles from './ReceiptUploader.module.scss';

/* Interface(s) */
interface ReceiptUploaderProps {
    color?: string;
    backgroundColor?: string;
}

const ReceiptUploader: React.FC<ReceiptUploaderProps> = ({ 
    color,
    backgroundColor
}) => {
    const dispatch = useDispatch();

    const takePicture = async () => {
        try {
            const image = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 100
            });

            if(image.dataUrl) {
                dispatch(uploadReceipt({
                    id: uuidv4(), 
                    content: image.dataUrl, 
                    uploadedToBlobStorage: false
                }));
            }
        } catch(error) {
            console.error(error);
        }
    };

    return (
        <IonFabButton
            style={{
                '--background': backgroundColor ? backgroundColor : undefined
            }}
            className={styles.receipt_uploader}
            onClick={
                () => {
                    takePicture();
                }
            }>
            <IonIcon 
                style={{
                    color: color ? color : undefined
                }}
                className={styles.icon}
                icon={camera}
            />
        </IonFabButton>
    );
};

export default ReceiptUploader;