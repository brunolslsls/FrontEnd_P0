import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UsuarioList from './src/components/UsuarioList'; // importando uma classe
import * as Animatable from 'react-native-animatable';
import { Modal } from 'react-native';

const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity)


export default function App() {
  const [usuario, setUsuario] = useState([ // Temos um Objeto Usuario 
    { key: 1, usuario: 'Jane' },
    { key: 2, usuario: 'maria' },
    { key: 3, usuario: 'Alexander' },
    { key: 4, usuario: 'Alexandra' },

  ]);

  const [abrir, setAbrir] = useState(false);


  return (
    {/* style={estilos.container} isso como fosse style='background-color: red' */ },
    {/* linha de baixo vai jogar o estilo do 'container' para 'View'  */ },
    <SafeAreaView style={estilos.container}>
      <StatusBar backgroundColor='#171d31' barStyle='light-content' />
      <View>
        <Text style={estilos.titulo}>Lista de Usuarios</Text>
      </View>



      <FlatList /*FlatList é um elemento que pode criar lista de alguma coisa */
        marginHorizontal={20} // adiciona uma margem na horizontal para cada item
        showsHorizontalScrollIndicator={false} // barra de rolagem não aparece
        data={usuario} // são as dados que vai a lista
        keyExtractor={(item) => String(item.key)} // chave primaria, coluna indentificação é objeto com nome "key"
        renderItem={({ item }) => < UsuarioList data={item} />} // Data recebe o objetos criandos
      ></FlatList>

      <Modal
        animationType="slide"
        transparent={false}
        visible={abrir}
      >
        <SafeAreaView style={estilos.modal}>
          <View style={estilos.modalHeader}>
            <TouchableOpacity
              onPress={() => setAbrir(false)}
            >
              <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="md-arrow-back" size={35} color="#FFF"></Ionicons>
            </TouchableOpacity>
            <Text style={estilos.textoModal}>Janela Modal Teste</Text>
          </View>

          

        </SafeAreaView>

      </Modal>



      <BotaoAnimado
        animation="bounceInUp"   // tipo de animação
        useNativeDriver        // Drive que precisa utilizar com  Animatable
        duration={1000} //A duração da animação

        style={estilos.botao} // Defina um estilo para o botão
        onPress={() => setAbrir(true)}  // chama uma função apois de precionar esse botão
      >
        <Ionicons name='ios-add' size={35} color='white' // cria um icone com um tamanho e cor 
        />
      </BotaoAnimado>

    </SafeAreaView>
  );
}

// StyleSheet.create = seria igual o <style></style> do CSS 
// A linha abaixo estamos criando um estilo e denominando este estilo todo para uma constante chamada 'estilo' 
const estilos = StyleSheet.create({
  container: {
    flex: 1,      // Tamanho do item 
    backgroundColor: '#111111',

  },
  titulo: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#767474',
    marginTop: 25,
    marginBottom: 20,
    fontSize: 20,
  },

  botao: {
    backgroundColor: '#005295', // cor de fundo
    borderRadius: 30, // porcentagem de arredondamento das bordas
    alignItems: 'center',  // alinha na vertical
    justifyContent: 'center',// alinha na Horizontal
    position: 'absolute', // move a na tela livrimente  
    width: 50, // comprimento do elemento
    height: 50, // altura do elemento
    right: 25,  // posicao dele na direita
    bottom: 25, // posicao dele a baixo
    zIndex: 9, // nivel da camada, quanto maior for numero mais na frente vai estar
    elevation: 5,  // intencidade da sombra
    shadowColor: 'red', // cor da sombra
    shadowOpacity: 0.2, // Nivel de opacidade da sombra
    shadowOffset: { width: 1, height: 3 }, // posicao da sombra
  },
  textoBotao: {
    fontSize: 18,
    color: 'white',


  },

  modal: {
    flex: 1,      // Tamanho do item 
    backgroundColor: '#111',

  },
  textoModal: {
    color: '#767474',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 20,

  },

  modalHeader: {

    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
  },


});
