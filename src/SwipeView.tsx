import React, { useRef, forwardRef, useImperativeHandle, useContext } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  GestureEvent,
  NativeViewGestureHandlerPayload,
  PanGestureHandlerEventPayload
} from 'react-native-gesture-handler';
import EasySwipe from './EasySwipe';
import {styles} from "./Styles";

interface LeftRightButtonProps {
  (): JSX.Element;
}

export interface SwipeViewProps {
  LeftButton?: LeftRightButtonProps;
  RightButton?: LeftRightButtonProps;
  leftOffset?: number;
  rightOffset?: number;
  maxLeft?: number;
  maxRight?: number;
  onLeftSwipe?: (value: number) => void;
  onRightSwipe?: (value: number) => void;
  onSwipe?: (value: number) => void;
  children: React.ReactNode;
}

export interface SwipeViewRef {
  resetPosition: () => void;
}

const SwipeView = forwardRef<SwipeViewRef, SwipeViewProps>(
    (
        {
          LeftButton,
          RightButton,
          leftOffset = 100,
          rightOffset = 100,
          maxLeft = 150,
          maxRight = 150,
          onLeftSwipe,
          onRightSwipe,
          onSwipe,
          children,
        },
        ref
    ) => {
      const initialRef = useRef(null);
      const swipeViewRef = useRef(null);
      const translateX = useSharedValue(0);
      const scrollViewRef = useContext(EasySwipe);

      const waitForRef = scrollViewRef?.current ? scrollViewRef : initialRef;
      const simultaneousHandlersRef = scrollViewRef?.current ? scrollViewRef : initialRef;

      const gestureHandler = useAnimatedGestureHandler<GestureEvent<PanGestureHandlerEventPayload>, { startX: number }>({
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
          } else {
            offsetX = offsetX < 0 ? 0 : offsetX;
          }

          if (LeftButton) {
            offsetX = maxLeft && offsetX > maxLeft ? maxLeft : offsetX;
          } else {
            offsetX = offsetX > 0 ? 0 : offsetX;
          }

          translateX.value = offsetX;
          onSwipe && runOnJS(onSwipe)(translateX.value);
        },
        onEnd: (event) => {

          if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
            translateX.value = withSpring(0);
            return;
          }

          if (translateX.value > leftOffset && LeftButton) {
            translateX.value = withSpring(leftOffset);
            onLeftSwipe && runOnJS(onLeftSwipe)(translateX.value);
          } else if (translateX.value < -rightOffset && RightButton) {
            translateX.value = withSpring(-rightOffset);
            onRightSwipe && runOnJS(onRightSwipe)(translateX.value);
          } else {
            translateX.value = withSpring(0);
          }
        },
      });
      const contentStyle = useAnimatedStyle(() => {
        return {
          transform: [{ translateX: translateX.value }],
        };
      });


      useImperativeHandle(ref, () => ({
        resetPosition: () => {
          translateX.value = withSpring(0);
        },
      }));

      return (
          <View style={styles.container} ref={swipeViewRef}>
            <View style={[styles.buttonContainer]}>
              {LeftButton && (
                  <View style={styles.buttonItemLeft}>
                    <LeftButton />
                  </View>
              )}
              {RightButton && (
                  <View style={styles.buttonItemRight}>
                    <RightButton />
                  </View>
              )}
            </View>
            <PanGestureHandler
                onGestureEvent={gestureHandler as (event: GestureEvent<PanGestureHandlerEventPayload>) => void}
                waitFor={waitForRef}
                simultaneousHandlers={simultaneousHandlersRef}
                failOffsetY={[-10, 10]}
                activeOffsetX={[-5, 5]} // Add this line
            >
              <Animated.View style={[styles.content, contentStyle]}>{children}</Animated.View>
            </PanGestureHandler>
          </View>
      );
    }
);

export default SwipeView;
