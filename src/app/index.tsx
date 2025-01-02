import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { getUSD } from "../services/awesomeapi";

export default function DolarScreen() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentValue, setCurrentValue] = useState<number>(0);

  const updateCurrency = async () => {
    setLoading(true);
    const value = await getUSD();
    setLoading(false);
    setCurrentValue(value);
  };

  useEffect(() => {
    updateCurrency();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/dolar.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      {loading && <ActivityIndicator size={50} style={{ margin: 50 }} />}
      {!loading && (
        <>
          <Text style={styles.h2}>O dólar americano está: </Text>
          <Text style={styles.currencyText}>R$ {currentValue.toFixed(2)} </Text>
        </>
      )}
      <Button label="Atualizar" onPress={updateCurrency} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1C2D",
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 180,
  },

  h2: {
    color: "#CCCCCC",
    fontSize: 24,
    marginTop: 30,
  },

  currencyText: {
    color: "#FFFFFF",
    fontSize: 52,
    marginTop: 20,
    marginBottom: 50,
  },
});
