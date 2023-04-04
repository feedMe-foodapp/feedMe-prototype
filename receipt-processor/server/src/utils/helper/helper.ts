/* helper.ts (util) */

/* */
import buffer from 'buffer-from';

export const getMimeTypeOfBase64 = (content: string) =>{
    const matchesBlobImg = content.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const imgType = matchesBlobImg![1];
    return imgType;
};

export const createImgBuffer = (content: string) => {
    const matchesBlobImg = content.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const imgBuffer = buffer(matchesBlobImg![2], 'base64');
    return imgBuffer;
};