import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity)

export default function UsuarioList({ data }) {
  return (
    //Animatable.View = criando uma janela animada , 
    <Animatable.View
      animation="bounceIn"   // tipo de animação
      useNativeDriver        // Drive que precisa utilizar com  Animatable

      style={estilos.container} // estilo da janela
      > 

      <BotaoAnimado
        animation="bounceIn"   // tipo de animação
        useNativeDriver        // Drive que precisa utilizar com  Animatable
        duration={500} //A duração da animação
      >
        
        <Ionicons name='md-checkmark-circle' size={35} color='#121212' // cria um icone com um tamanho e cor 
        />
      </BotaoAnimado>

      <View>
        <Text style={estilos.texto}>{data.key} - {data.usuario}</Text>
      </View>
    </Animatable.View> // fim da View container
  )


}

const estilos = StyleSheet.create({
  container: {
    flex: 1,      // Tamanho do item 
    backgroundColor: '#FFF', // cor de fundo
    alignItems: 'center', // alinha Horizontal
    flexDirection: 'row', // alinha o itens em linha
    padding: 7, //
    margin: 7, //
    borderRadius: 7,
    elevation: 5,  // intencidade da sombra
    shadowColor: 'red', // cor da sombra
    shadowOpacity: 0.2, // Nivel de opacidade da sombra
    shadowOffset: { width: 1, height: 3 }, // posicao da sombra


  },
  texto: {
    padding: 6, //
    paddingLeft: 1,
    margin: 6, //
  },



});
