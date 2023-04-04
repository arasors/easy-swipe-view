import { FC, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface ButtonProps {
    onPress?: () => void;
    width?: number;
    backgroundColor?: string;
    underlayColor?: string;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}
export declare const LeftButton: FC<ButtonProps>;
export declare const RightButton: FC<ButtonProps>;
export {};
