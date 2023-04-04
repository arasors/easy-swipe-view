"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const EasySwipe_1 = __importDefault(require("./EasySwipe"));
const Styles_1 = require("./Styles");
const SwipeView = (0, react_1.forwardRef)(({ LeftButton, RightButton, leftOffset = 100, rightOffset = 100, maxLeft = 150, maxRight = 150, onLeftSwipe, onRightSwipe, onSwipe, children, }, ref) => {
    const initialRef = (0, react_1.useRef)(null);
    const swipeViewRef = (0, react_1.useRef)(null);
    const translateX = (0, react_native_reanimated_1.useSharedValue)(0);
    const scrollViewRef = (0, react_1.useContext)(EasySwipe_1.default);
    const waitForRef = (scrollViewRef === null || scrollViewRef === void 0 ? void 0 : scrollViewRef.current) ? scrollViewRef : initialRef;
    const simultaneousHandlersRef = (scrollViewRef === null || scrollViewRef === void 0 ? void 0 : scrollViewRef.current) ? scrollViewRef : initialRef;
    const gestureHandler = (0, react_native_reanimated_1.useAnimatedGestureHandler)({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            if (Math.abs(event.translationY) > Math.abs(event.translationX)) {
                return;
            }
            let offsetX = ctx.startX + event.translationX;
            if (RightButton) {
                offsetX = maxRight && offsetX < -maxRight ? -maxRight : offsetX;
            }
            else {
                offsetX = offsetX < 0 ? 0 : offsetX;
            }
            if (LeftButton) {
                offsetX = maxLeft && offsetX > maxLeft ? maxLeft : offsetX;
            }
            else {
                offsetX = offsetX > 0 ? 0 : offsetX;
            }
            translateX.value = offsetX;
            animatedTranslationX.value = event.translationX;
            onSwipe && (0, react_native_reanimated_1.runOnJS)(onSwipe)(translateX.value);
        },
        onEnd: (event) => {
            if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
                translateX.value = (0, react_native_reanimated_1.withSpring)(0);
                return;
            }
            if (translateX.value > leftOffset && LeftButton) {
                translateX.value = (0, react_native_reanimated_1.withSpring)(leftOffset);
                onLeftSwipe && (0, react_native_reanimated_1.runOnJS)(onLeftSwipe)(translateX.value);
            }
            else if (translateX.value < -rightOffset && RightButton) {
                translateX.value = (0, react_native_reanimated_1.withSpring)(-rightOffset);
                onRightSwipe && (0, react_native_reanimated_1.runOnJS)(onRightSwipe)(translateX.value);
            }
            else {
                translateX.value = (0, react_native_reanimated_1.withSpring)(0);
            }
        },
    });
    const contentStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });
    const animatedTranslationX = (0, react_native_reanimated_1.useSharedValue)(0);
    (0, react_1.useImperativeHandle)(ref, () => ({
        resetPosition: () => {
            animatedTranslationX.value = (0, react_native_reanimated_1.withSpring)(0);
        },
    }));
    return (<react_native_1.View style={Styles_1.styles.container} ref={swipeViewRef}>
            <react_native_1.View style={[Styles_1.styles.buttonContainer]}>
              {LeftButton && (<react_native_1.View style={Styles_1.styles.buttonItemLeft}>
                    <LeftButton />
                  </react_native_1.View>)}
              {RightButton && (<react_native_1.View style={Styles_1.styles.buttonItemRight}>
                    <RightButton />
                  </react_native_1.View>)}
            </react_native_1.View>
            <react_native_gesture_handler_1.PanGestureHandler onGestureEvent={gestureHandler} waitFor={waitForRef} simultaneousHandlers={simultaneousHandlersRef} failOffsetY={[-10, 10]} activeOffsetX={[-5, 5]} // Add this line
    >
              <react_native_reanimated_1.default.View style={[Styles_1.styles.content, contentStyle]}>{children}</react_native_reanimated_1.default.View>
            </react_native_gesture_handler_1.PanGestureHandler>
          </react_native_1.View>);
});
exports.default = SwipeView;
