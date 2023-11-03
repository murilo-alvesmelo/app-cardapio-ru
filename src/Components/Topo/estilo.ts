import { Platform, StyleSheet } from "react-native";
import colors from "../../colors";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "android" ? 20 : 35,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    color: colors.title,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 10,
  },
  subtitle: {
    color: colors.title,
    fontSize: 20,
  },
});

export default estilo;
