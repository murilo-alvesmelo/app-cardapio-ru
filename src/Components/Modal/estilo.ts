import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  containerView: {
    flex: 1,
  },
  modalView: {
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  cabecalhoModal: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    position: "absolute",
    right: 20,
  },
  infoRefeicaoView: {
    flex: 1,
    padding: 20,
  },
  infoRefeicaoText: {
    fontSize: 20,
    fontWeight: "normal",
  },
  divisor: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: 10,
    width: "90%",
    marginVertical: 15,
  },
});
