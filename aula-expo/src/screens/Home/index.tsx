import * as React from "react";
import {Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Linking, ScrollView, FlatList} from "react-native";
import { Button } from "./components/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import Carousel from 'react-native-snap-carousel';


const produtos = [
  {
    id: "1",
    title:"Novidades",
  },

  {
    id: "2",
    title:"Camisas",
  },

  {
    id: "3",
    title:"Calças",
  },

  {
    id: "4",
    title:"Moletons",
  },

  {
    id: "5",
    title:"Vestidos",
  },

]


export const HomeProps = () => {
    return(
        <View style={styles.container}>
          {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}> */}
            {/* <Image style={styles.foto} source={require("../Home/camisa.png")}/> */}

            {/* <Image style={styles.foto} source={require("../Home/camisaEren.png")}/> */}

            {/* <Image style={styles.foto} source={require("../Home/canecaonepiece.png")}/> */}
          {/* </ScrollView> */}

          <ScrollView showsVerticalScrollIndicator={false} style={styles.container_2}>
            <View style={styles.wrapper_button}>
              { 
                produtos.map(item => (
                <Button key={item.id} title={item.title}/>
               ))
                  
              }
            </View>
          </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "#92B9BD",
      },

      container_2: {
        
      },

     scroll:{
         width:300,
         height:200,
         marginTop:100,
         marginLeft: 30,
     },

    foto:{
        width:100,
        height:100,
    },

    botao:{
        borderRadius: 20,
        width: 50,
        
    },
    
    wrapper_button:{
        paddingHorizontal: 15,
        marginTop: 210,
    },
    
})

export default HomeProps;