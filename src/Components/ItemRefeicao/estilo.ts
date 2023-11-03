import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  itemCard: {
    flexDirection: "row",
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  icon: {
    color: "#d3d3d3",
    marginRight: 10,
  },
  title: {
    fontSize: 16,
  },
  divisor: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    width: "90%",
  },
});

export default estilo;
