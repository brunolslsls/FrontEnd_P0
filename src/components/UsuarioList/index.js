import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UsuarioList({data}) {
  return (
    <View style={estilos.container}>
      <TouchableOpacity>
        <Ionicons name='md-checkmark-circle' size={35} color='#121212' // cria um icone com um tamanho e cor 
        />
      </TouchableOpacity>

      <View>
        <Text style={estilos.texto}>{data.key} - {data.usuario}</Text>
      </View>
    </View> // fim da View container
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
    borderRadius:7,
    elevation: 5,  // intencidade da sombra
    shadowColor: 'red', // cor da sombra
    shadowOpacity: 0.2, // Nivel de opacidade da sombra
    shadowOffset: { width: 1, height: 3 }, // posicao da sombra


  },
  texto: {
    padding: 6, //
    paddingLeft:1,
    margin: 6, //
  },



});
