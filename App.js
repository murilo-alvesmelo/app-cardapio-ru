import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Navigator from "./src/Navigator";

library.add(fas);

export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
}
