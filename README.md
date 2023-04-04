# easy-swipe-view

A simple and easy-to-use swipeable list component for `React Native` projects, built with Reanimated v2 and react-native-gesture-handler.

- Smooth gesture interactions & snapping animations.
- Compatible with `Reanimated` v2
- Compatible with `Expo`.
- FlatList and ScrollView support.
- Written in `TypeScript`
- Predefined `Buttons` components for swipe actions

## Installation

First, make sure you have installed [react-native-reanimated v2](https://docs.swmansion.com/react-native-reanimated/docs/installation) and [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started) in your project:
Then,
```
npm install easy-swipe-view
```
or

```
yarn add easy-swipe-view
```
or
```
pnpm add easy-swipe-view
```

## Usage

### SwipeView Component

1. Import the `SwipeView` component and the `EasySwipe` context:

```javascript
import { SwipeView, EasySwipe } from 'easy-swipe-view';
```
2. Wrap your list component (e.g., ScrollView, FlatList or SectionList) with the EasySwipe.Provider:

> __Note__
💡 If you are not going to use the component inside a scrollable element, skip this step.
>


```javascript
<EasySwipe.Provider value={ref}>
  <FlatList
    ref={ref}
    ...
  />
</EasySwipe.Provider>
```
3. Use the SwipeView component as a wrapper for your list items:
```javascript
const MyLeftButtonComponent = () => (
  <LeftButton
    onPress={leftButtonAction}
    width={100}
    backgroundColor="#ff0015"
  >
    <Octicons name="trash" size={22} color={"#fff"} />
  </LeftButton>
);

const MyRightButtonComponent = () => (
  <RightButton
    onPress={rightButtonAction}
    width={100}
    backgroundColor="#0088ff"
  >
    <Octicons name="archive" size={22} color={"#fff"} />
  </RightButton>
);
```
```javascript
<SwipeView
  ref={swipeRef}
  LeftButton={MyLeftButtonComponent} //If you leave it blank, it will be disabled.
  RightButton={MyRightButtonComponent} //If you leave it blank, it will be disabled.
  leftOffset={100}
  rightOffset={100}
  maxLeft={150}
  maxRight={150}
  onLeftSwipe={() => console.log("On Swipe!")}
  onRightSwipe={() => console.log("On Swipe!")}
  onSwipe={(position) => console.log(position)}
>
  <View 
    style={{
      width: '100%',
      backgroundColor: 'gray',
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 4,
      paddingRight: 4,
      alignItems: 'center'
    }}
  >
    <Text style={{color: "#030303"}}>Swipe me!</Text>
  </View>
</SwipeView>
```

If you want to reset the position by outside intervention;
```javascript
<TouchableHighlight onPress={() => swipeRef.current.resetPosition()}>
  <Text>Reset</Text>
</TouchableHighlight>
```

### SwipeList Component
1. Import the SwipeList component:
```javascript
import { SwipeList } from 'easy-swipe-view';
```

1. Use the SwipeList component as a wrapper for your FlatList:
```javascript
<SwipeList
  LeftButton={MyLeftButtonComponent}
  RightButton={MyRightButtonComponent}
  leftOffset={myLeftOffset}
  rightOffset={myRightOffset}
  maxLeft={150}
  maxRight={150}
  onLeftSwipe={() => console.log("On Swipe!")}
  onRightSwipe={() => console.log("On Swipe!")}
  onSwipe={(position) => console.log(position)}
  data={yourData}
  renderItem={({item}) => (
    <View 
      style={{
        width: '100%',
        backgroundColor: 'gray',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 4,
        paddingRight: 4,
        alignItems: 'center'
      }}
    >
      <Text style={{color: "#030303"}}>{item.title}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
/>
```



# Props Documentation

This file contains the props documentation for the `SwipeView`, `Buttons`, and `SwipeList` components.

## SwipeView Props

| Prop         | Type                          | Default | Description                                                                                                  |
|--------------|-------------------------------|---------|--------------------------------------------------------------------------------------------------------------|
| LeftButton   | Component                     | null    | The component to be rendered when swiping to the right. If not provided, left swipe will be disabled.       |
| RightButton  | Component                     | null    | The component to be rendered when swiping to the left. If not provided, right swipe will be disabled.       |
| leftOffset   | number                        | 100     | The offset required to trigger a left swipe action.                                                          |
| rightOffset  | number                        | 100     | The offset required to trigger a right swipe action.                                                         |
| maxLeft      | number                        | 150     | The maximum distance the item can be swiped to the right.                                                    |
| maxRight     | number                        | 150     | The maximum distance the item can be swiped to the left.                                                     |
| onLeftSwipe  | (value: number) => void       | null    | A callback function to be called when a left swipe action is triggered.                                      |
| onRightSwipe | (value: number) => void       | null    | A callback function to be called when a right swipe action is triggered.                                     |
| onSwipe      | (value: number) => void       | null    | A callback function to be called when the item is being swiped.                                              |
| children     | React.ReactNode               | null    | The content of the `SwipeView` component.                                                                    |

## Buttons Props

| Prop            | Type                          | Default | Description                                                                                                  |
|-----------------|-------------------------------|---------|--------------------------------------------------------------------------------------------------------------|
| onPress         | () => void                    | () => {}| The callback function to be called when the button is pressed.                                               |
| width           | number                        | 100     | The width of the button component.                                                                           |
| backgroundColor | string                       | '#ff0015' for LeftButton, '#0088ff' for RightButton| The background color of the button component.                               |
| underlayColor   | string                       | '#b00412' for LeftButton, '#0077ff' for RightButton| The background color of the button component for active.                               |
| style           | ViewStyle                     | {}      | Additional styles for the button component.                                                                  |
| children        | React.ReactNode               | <></>   | The content of the button component.                                                                         |
| ...props        | any                           | -       | Other props to be passed down to the `TouchableHighlight` component.                                         |

## SwipeList Props

| Prop          | Type                          | Default | Description                                                                                                  |
|---------------|-------------------------------|---------|--------------------------------------------------------------------------------------------------------------|
| ...flatListProps | any                       | -       | All other props available for the `FlatList` component.                                                      |
| LeftButton    | Component                     | null    | The component to be rendered when swiping to the right. If not provided, left swipe will be disabled.       |
| RightButton   | Component                     | null    | The component to be rendered when swiping to the left. If not provided, right swipe will be disabled.       |
| leftOffset    | number                        | 100     | The offset required to trigger a left swipe action.                                                          |
| rightOffset   | number                        | 100     | The offset required to trigger a right swipe action.                                                         |
| maxLeft       | number                        | 150     | The maximum distance the item can be swiped to the right.                                                    |
| maxRight      | number                        | 150     | The maximum distance the item can be swiped to the left.                                                     |
| onLeftSwipe   | (value: number) => void       | null    | A callback function to be called when a left swipe action is triggered.                                      |
| onRightSwipe  | (value: number) => void       | null    | A callback function to be called when a right swipe action is triggered.                                     |
| onSwipe       | (value: number) => void       | null    | A callback function to be called when the item is being swiped.                                              |
| renderItem    | ({item, index}) => JSX.Element | null    | A function that returns the component to be rendered for each item in the list. Must be wrapped with `SwipeView`. |









Please refer to the examples provided in the repository for detailed usage instructions.
## Author

[Aras Ors](https://github.com/arasors)

[![Kahve](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg)](https://www.buymeacoffee.com/arasors)
## Lisans

[MIT](https://choosealicense.com/licenses/mit/)
