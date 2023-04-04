import React from 'react';
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
declare const SwipeView: React.ForwardRefExoticComponent<SwipeViewProps & React.RefAttributes<SwipeViewRef>>;
export default SwipeView;
