import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import estilo from "./estilo";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import moment from "moment/moment";
import "moment/locale/pt-br";
import todayImage from "../../../assets/today.png";
import weekImage from "../../../assets/week.png";
import monthImage from "../../../assets/month.png";

interface Props {
  navigation: any;
  title: string;
}

export default function Topo({ navigation, title }: Props): JSX.Element {
  const getImage = () => {
    switch (title) {
      case "Hoje":
        return todayImage;
      case "Semana":
        return weekImage;
      case "Mês":
        return monthImage;
      default:
        return todayImage;
    }
  };
  return (
    <View style={estilo.container}>
      <ImageBackground source={getImage()} style={{ flex: 1 }}>
        <View style={estilo.iconContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesomeIcon icon={"bars"} color={"#fff"} size={30} />
          </TouchableOpacity>
          <View>
            <Text style={estilo.title}>{title}</Text>
            <Text style={estilo.subtitle}>
              {moment().format("ddd, D [de] MMMM")}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
