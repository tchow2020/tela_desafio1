import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.header}>
          <Text style={styles.carlos}>Bem vindo, Carlos</Text>
          <View style={styles.textFilho}>
            <Text style={{ color: "#fff" }}>Você gastou hoje</Text>
            <Text style={{ fontSize: 30, color: "#fff" }}>R$ 500</Text>
          </View>

          <View style={styles.textFilho2}>
            <Text style={{ color: "#fff", marginBottom: 6 }}>
              ESCOLHER PERÍODO:
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={styles.text}>Hoje</Text>
              <Text style={styles.text}>Essa Semana</Text>
              <Text style={styles.text}>Esse Mês</Text>
            </View>
          </View>
        </View>

        <View style={styles.botão}>  
  
          <Button 
          style={{ backgroundColor: "#444140" }}
          icon={{ name: "flight", color: "#fff" }}
          ></Button>      
          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "home", color: "#fff" }}
          ></Button>
          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "local-dining", color: "#fff" }}
          ></Button>
          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "directions-car", color: "#fff" }}
          ></Button>
          <Button
            style={{ backgroundColor: "#444140" }}
            icon={{ name: "build", color: "#fff" }}
          ></Button>
          
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10,
            backgroundColor: "#fff",
          }}
        >
          <Text>Pizza(R$ 30)</Text>
          <Text>20/02/2020</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10,
            backgroundColor: "#fff",
          }}
        >
          <Text>Coca-Cola(R$ 10)</Text>
          <Text>20/02/2020</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7EBE8",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    width: "100%",
    height: 300,

    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    paddingTop: 25,
    backgroundColor: "#E54B4B",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  carlos: {
    color: "#fff",
    fontSize: 25,
  },

  textFilho: {
    alignItems: "center",
    justifyContent: "center",
  },

  textFilho2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 18,
    width: "100%",
  },

  text: {
    color: "#fff",
  },

  botão:{
    flexDirection: "row",
    padding: 15,
    width: "100%",
    justifyContent: "space-between",
  }

});
