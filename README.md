
# easy-swipe-list

A simple and easy-to-use swipeable list component for React Native projects, built with Reanimated v2 and react-native-gesture-handler.

- Smooth gesture interactions & snapping animations.
- Compatible with `Reanimated` v2
- Compatible with `Expo`.
- FlatList and ScrollView support.
- Written in `TypeScript`

## Installation

First, make sure you have installed [react-native-reanimated v2](https://docs.swmansion.com/react-native-reanimated/docs/installation) and [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started) in your project:
Then, 
```
install `easy-swipe-list`:
```
## Usage

1. Import the `SwipeView` component and the `EasySwipe` context:

```javascript
import { SwipeView, EasySwipe } from 'easy-swipe-list';
```
2. Wrap your list component (e.g., FlatList or SectionList) with the EasySwipe.Provider:
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
const myLeftOffset = 100;
const maxLeft = 180;
  const LeftButton = useCallback(() => (
    <MyLeftButtonComponent 
    underlayColor={"#dc0021"} 
    onPress={leftButtonAction} 
    style={{
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'start',
        justifyContent: 'center',
        paddingLeft: 8,
        overflow: 'hidden',
        width: '100%'
        }}
        >
      <View 
        style={{
            width: `${myLeftOffset}px`,
            alignItems: 'center',
            justifyContent: 'center'
        })}
       >
        <Octicons name="trash" size={22} color={"#fff"} />
      </View>
    </TouchableHighlight>
  ), [deleteLoaded,swipePosition]);
```
and:
```javascript
<SwipeView
  LeftButton={MyLeftButtonComponent} //If you leave it blank, it will be disabled.
  RightButton={false} //If you leave it blank, it will be disabled.
  leftOffset={myLeftOffset}
  rightOffset={100}
  maxLeft={150}
  maxRight={150}
  onLeftSwipe={() => console.log("On Swipe!")}
  onRightSwipe={() => console.log("On Swipe!")}
  onSwipe={(position) => console.log(position)}
>
  <YourListItem />
</SwipeView>
```

Please refer to the examples provided in the repository for detailed usage instructions.
## Author

 [Aras Ors](https://github.com/arasors)

 [![Kahve](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg)](https://www.buymeacoffee.com/arasors)
## Lisans

[MIT](https://choosealicense.com/licenses/mit/)

  