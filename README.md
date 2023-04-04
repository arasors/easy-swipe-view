
# easy-swipe-view

A simple and easy-to-use swipeable list component for `React Native` projects, built with Reanimated v2 and react-native-gesture-handler.

- Smooth gesture interactions & snapping animations.
- Compatible with `Reanimated` v2
- Compatible with `Expo`.
- FlatList and ScrollView support.
- Written in `TypeScript`

## Installation

First, make sure you have installed [react-native-reanimated v2](https://docs.swmansion.com/react-native-reanimated/docs/installation) and [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/getting-started) in your project:
Then, 
```
install `easy-swipe-view`:
```
## Usage

1. Import the `SwipeView` component and the `EasySwipe` context:

```javascript
import { SwipeView, EasySwipe } from 'easy-swipe-view';
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
  const MyLeftButtonComponent = () => (
    <TouchableHighlight
    underlayColor={"#b00412"} 
    onPress={leftButtonAction} 
    style={{
        backgroundColor: '#ff0015',
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
  );

const myRightOffset = 100;
  const MyRightButtonComponent = () => (
    <TouchableHighlight
    underlayColor={"#0077ff"} 
    onPress={leftButtonAction} 
    style={{
        backgroundColor: '#0088ff',
        flex: 1,
        width: '100%',
        alignItems: 'end',
        justifyContent: 'center',
        paddingRight: 8
        }}
        >
      <View 
        style={{
            width: `${myLeftOffset}px`,
            alignItems: 'center',
            justifyContent: 'center'
        })}
       >
        <Octicons name="archive" size={22} color={"#fff"} />
      </View>
    </TouchableHighlight>
  );
```
and:
```javascript
const swipeRef = useRef(null);
```

```javascript
<SwipeView
  ref={swipeRef}
  LeftButton={MyLeftButtonComponent} //If you leave it blank, it will be disabled.
  RightButton={MyRightButtonComponent} //If you leave it blank, it will be disabled.
  leftOffset={myLeftOffset}
  rightOffset={myRightOffset}
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

Please refer to the examples provided in the repository for detailed usage instructions.
## Author

 [Aras Ors](https://github.com/arasors)

 [![Kahve](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg)](https://www.buymeacoffee.com/arasors)
## Lisans

[MIT](https://choosealicense.com/licenses/mit/)

  