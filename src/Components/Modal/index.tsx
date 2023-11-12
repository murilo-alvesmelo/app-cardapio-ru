import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import { estilo } from "./estilo";

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
  days?: number;
}

export default function ModalRefeicao({
  visible,
  setModalVisible,
  refeicao,
  days,
}: Props): JSX.Element {
  const getColorCabecalho = () => {
    if (days === 0) {
      return "#004AAD";
    } else if (days === 7) {
      return "#02AF23";
    } else if (days === 30) {
      return "#F02C1F";
    }
  };
  return (
    <View style={estilo.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={estilo.centeredView}>
          <View style={estilo.modalView}>
            <View
              style={[
                estilo.cabecalhoModal,
                { backgroundColor: getColorCabecalho() },
              ]}
            >
              <Text style={estilo.titulo}>Refeição</Text>
              <TouchableOpacity onPress={setModalVisible} style={estilo.icon}>
                <FontAwesomeIcon icon={"xmark"} size={25} color={"#fff"} />
              </TouchableOpacity>
            </View>
            <View style={estilo.infoRefeicaoView}>
              <Text style={estilo.infoRefeicaoText}>
                Prato: {refeicao.refeicao}
              </Text>
              <View style={estilo.divisor} />
              <Text style={estilo.infoRefeicaoText}>
                Carboidratos: {refeicao.carboidrato}
              </Text>
              <View style={estilo.divisor} />
              <Text style={estilo.infoRefeicaoText}>
                Guarnição: {refeicao.guarnicao}
              </Text>
              <View style={estilo.divisor} />
              <Text style={estilo.infoRefeicaoText}>
                Leguminosas: {refeicao.leguminosas}
              </Text>
              <View style={estilo.divisor} />
              <Text style={estilo.infoRefeicaoText}>
                Salada: {refeicao.salada}
              </Text>
              <View style={estilo.divisor} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
