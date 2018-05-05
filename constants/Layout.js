import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;
const getAppBarHeight = isLandscape => {
    return Platform.OS === 'ios'
        ? isLandscape && !Platform.isPad
            ? 32
            : 44
        : 56;
};
const isIphoneX = Platform.OS === "ios" && height === 812 && width === 375;
export default {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
    onePx: 1 / PixelRatio.get(),
    APPBAR_HEIGHT: APPBAR_HEIGHT,
    STATUSBAR_HEIGHT: Platform.OS === "ios" ? (isIphoneX ? 39 : 15) : Platform.Version > 18 ? StatusBar.currentHeight : 0,
    TITLE_OFFSET: TITLE_OFFSET
};
