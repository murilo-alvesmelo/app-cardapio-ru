import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import estilo from "./estilo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

interface Props {
  navigation: any;
  title: string;
}

export default function Topo({ navigation, title }: Props): JSX.Element {
  return (
    <View style={estilo.container}>
      <View style={estilo.iconContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesomeIcon icon={"bars"} color={"#fff"} size={30} />
        </TouchableOpacity>
        <View>
          <Text>{title}</Text>
        </View>
      </View>
    </View>
  );
}
