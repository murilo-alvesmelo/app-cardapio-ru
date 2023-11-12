import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import estilo from "./estilo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Animated, { FadeInUp } from "react-native-reanimated";
import ModalRefeicao from "../Modal";

interface Props {
  index: number;
  refeicao: {
    carboidrato: string;
    guarnicao: string;
    leguminosas: string;
    refeicao: string;
    salada: string;
  };
  days?: number;
}

export default function ItemCardapio({
  refeicao,
  index,
  days,
}: Props): JSX.Element {
  const [visible, setVisible] = useState(false);

  const setModalVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Animated.View
        style={estilo.itemCard}
        entering={FadeInUp.delay(300 * index).duration(300)}
      >
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{ flexDirection: "row" }}
        >
          <View style={estilo.itemRow}>
            <FontAwesomeIcon style={estilo.icon} icon={"utensils"} size={25} />
            <Text style={estilo.title}>{refeicao.refeicao}</Text>
          </View>
          <FontAwesomeIcon style={estilo.icon} icon={"sun"} size={25} />
        </TouchableOpacity>
      </Animated.View>
      <View style={estilo.divisor} />
      <ModalRefeicao
        visible={visible}
        setModalVisible={setModalVisible}
        refeicao={refeicao}
        days={days}
      />
    </>
  );
}
