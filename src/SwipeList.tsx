import React, { FC, forwardRef, useRef } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { default as EasySwipe } from './EasySwipe';
import SwipeView, { SwipeViewProps } from './SwipeView';

type SwipeListProps<ItemT> = Omit<FlatListProps<ItemT>, 'renderItem'> &
    SwipeViewProps & {
    renderItem: (item: ItemT, index: number) => React.ReactNode;
};

const SwipeList = <ItemT,>({
                               renderItem,
                               LeftButton,
                               RightButton,
                               leftOffset,
                               rightOffset,
                               maxLeft,
                               maxRight,
                               onLeftSwipe,
                               onRightSwipe,
                               onSwipe,
                               ...flatListProps
                           }: SwipeListProps<ItemT>) => {
    const listRef = useRef<FlatList>(null);

    return (
        <EasySwipe.Provider value={listRef}>
            <FlatList
                ref={listRef}
                {...flatListProps}
                renderItem={({ item, index, separators }) => (
                    <SwipeView
                        LeftButton={LeftButton}
                        RightButton={RightButton}
                        leftOffset={leftOffset}
                        rightOffset={rightOffset}
                        maxLeft={maxLeft}
                        maxRight={maxRight}
                        onLeftSwipe={onLeftSwipe}
                        onRightSwipe={onRightSwipe}
                        onSwipe={onSwipe}
                    >
                        {renderItem(item, index)}
                    </SwipeView>
                )}
            />
        </EasySwipe.Provider>
    );
};

export default SwipeList;
