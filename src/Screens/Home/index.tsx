import React from "react";
import { ScrollView, Text, View } from "react-native";
import estilo from "./estilo";
import Topo from "../../Components/Topo";

interface Props {
  navigation: any;
  title: string;
}

export default function Home({ navigation, title }: Props): JSX.Element {
  return (
    <>
      <Topo navigation={navigation} title={title} />
      <ScrollView style={estilo.container}>
        <Text>{title}</Text>
      </ScrollView>
    </>
  );
}
