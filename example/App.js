import React, {memo} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BasicExample from "./src/BasicExample";

function App() {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
        <BasicExample />
    </GestureHandlerRootView>
  );
}

export default memo(App);
