import {useRef, useState} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { SwipeView, LeftButton, RightButton } from 'easy-swipe-view';

export default function BasicExample() {

    const swipeRef = useRef(null);
    const [pos, setPos] = useState(0);
    const MyLeftButtonComponent = () => (
        <LeftButton
            onPress={() => {}}
            width={100}
            backgroundColor="#ff0015"
        >
            <Text style={{color: "#fff"}}>Remove</Text>
        </LeftButton>
    );

    const MyRightButtonComponent = () => (
        <RightButton
            onPress={() => {}}
            width={100}
            backgroundColor="#0088ff"
        >
            <Text style={{color: "#fff"}}>Archive</Text>
        </RightButton>
    );

    return (
        <View style={styles.container}>
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
                onSwipe={(position) => setPos(position)}
            >
                <View
                    style={{
                        width: '100%',
                        backgroundColor: '#161616',
                        paddingTop: 16,
                        paddingBottom: 16,
                        paddingLeft: 4,
                        paddingRight: 4,
                        alignItems: 'center',
                        borderRadius: 5,
                        overflow: "hidden"
                    }}
                >
                    <Text style={{color: "#f3f3f3"}}>So easy</Text>
                </View>
            </SwipeView>


            <TouchableHighlight onPress={() => swipeRef.current.resetPosition()}>
                <Text>Reset</Text>
            </TouchableHighlight>
            {/*<Text style={{color: "#161616", marginTop: 20}}>{pos}</Text>*/}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
