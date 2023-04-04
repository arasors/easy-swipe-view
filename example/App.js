import {GestureHandlerRootView} from "react-native-gesture-handler";
import BasicExample from "./src/BasicExample";

export default function App() {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
        <BasicExample />
    </GestureHandlerRootView>
  );
}
