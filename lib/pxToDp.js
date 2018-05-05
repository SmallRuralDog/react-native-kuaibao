import {Dimensions} from 'react-native';
const deviceWidthDp = Dimensions
    .get('window')
    .width;
const uiWidthPx = 1080;
function pxToDp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx;
}
export default pxToDp;