import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import estilo from "./estilo";
import Topo from "../../Components/Topo";
import ItemCardapio from "../../Components/ItemRefeicao";
import api from "../../services/api";
import moment from "moment";

interface Props {
  navigation: any;
  title: string;
  days?: number;
}

export default function Home({ navigation, title, days }: Props): JSX.Element {
  const [refeicoes, setRefeicoes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getCardapio = async () => {
    try {
      const maxDate = moment()
        .add({ days: days })
        .format("YYYY-MM-DD 23:59:59");
      await api
        .get(`/cardapio?date=${maxDate}`)
        .then((response) => {
          setRefeicoes(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(async () => {
      setRefeicoes(null);
      getCardapio();
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    getCardapio();
    return () => {
      setRefeicoes(null);
    };
  }, []);

  return (
    <>
      <Topo navigation={navigation} title={title} />
      <View style={estilo.container}>
        <FlatList
          data={refeicoes}
          renderItem={({ item, index }) => (
            <ItemCardapio
              key={`${item.id}`}
              refeicao={item}
              index={index}
              days={days}
            />
          )}
          keyExtractor={(item) => item.refeicao}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#9Bd35A", "#689F38"]}
              progressBackgroundColor="#ffffff"
            />
          }
        />
      </View>
    </>
  );
}
