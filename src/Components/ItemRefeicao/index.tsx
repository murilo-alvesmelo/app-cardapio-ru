import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Animated, { FadeInUp } from "react-native-reanimated";

interface Props {
  index: number;
  refeicao: {
    carboidrato: string;
    guarnicao: string;
    leguminosas: string;
    refeicao: string;
    salada: string;
  };
}

export default function ItemCardapio({ refeicao, index }: Props): JSX.Element {
  return (
    <>
      <Animated.View
        style={estilo.itemCard}
        entering={FadeInUp.delay(300 * index).duration(300)}
      >
        <FontAwesomeIcon style={estilo.icon} icon={"utensils"} size={25} />
        <Text style={estilo.title}>{refeicao.refeicao}</Text>
      </Animated.View>
      <View style={estilo.divisor} />
    </>
  );
}
