import { Platform, StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
  },
  iconContainer: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "android" ? 20 : 35,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default estilo;
