import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

interface Props {
  refeicao: {
    carboidrato: string;
    guarnicao: string;
    leguminosas: string;
    refeicao: string;
    salada: string;
  };
  visible: boolean;
  setModalVisible?: () => void;
}

export default function ModalRefeicao({
  visible,
  setModalVisible,
  refeicao,
}: Props): JSX.Element {
  console.log(refeicao);
  return (
    <View style={estilo.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={estilo.containerView}>
          <View style={estilo.centeredView}>
            <View style={estilo.modalView}>
              <Text>Hello World!</Text>
              <TouchableOpacity onPress={setModalVisible}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilo = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "red",
  },
});
