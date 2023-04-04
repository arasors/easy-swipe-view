import React from 'react';
import { FlatListProps } from 'react-native';
import { SwipeViewProps } from './SwipeView';
type SwipeListProps<ItemT> = Omit<FlatListProps<ItemT>, 'renderItem'> & SwipeViewProps & {
    renderItem: (item: ItemT, index: number) => React.ReactNode;
};
declare const SwipeList: <ItemT>({ renderItem, LeftButton, RightButton, leftOffset, rightOffset, maxLeft, maxRight, onLeftSwipe, onRightSwipe, onSwipe, ...flatListProps }: SwipeListProps<ItemT>) => JSX.Element;
export default SwipeList;
