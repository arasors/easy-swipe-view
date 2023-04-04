import React, { FC, ReactNode } from 'react';
import { TouchableHighlight, View, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps {
    onPress?: () => void;
    width?: number;
    backgroundColor?: string;
    underlayColor?: string;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

export const LeftButton: FC<ButtonProps> = ({
                                                onPress = () => {},
                                                width = 100,
                                                backgroundColor = '#ff0015',
                                                underlayColor = '#b00412',
                                                style = {},
                                                children = <></>,
                                                ...props
                                            }) => (
    <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={[
            {
                backgroundColor,
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingLeft: 8,
                overflow: 'hidden',
                width: '100%',
            },
            style,
        ]}
        {...props}
    >
        <View
            style={{
                width,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </View>
    </TouchableHighlight>
);

export const RightButton: FC<ButtonProps> = ({
                                                 onPress = () => {},
                                                 width = 100,
                                                 backgroundColor = '#0088ff',
                                                 underlayColor = '#0077ff',
                                                 style = {},
                                                 children = <></>,
                                                 ...props
                                             }) => (
    <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={[
            {
                backgroundColor,
                flex: 1,
                width: '100%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingRight: 8,
            },
            style,
        ]}
        {...props}
    >
        <View
            style={{
                width,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </View>
    </TouchableHighlight>
);
