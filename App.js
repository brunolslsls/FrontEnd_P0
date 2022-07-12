import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UsuarioList from './src/components/UsuarioList';
import * as Animatable from 'react-native-animatable';

const BotaoAnimado = Animatable.createAnimatableComponent(TouchableOpacity);



export default function App() {
  const [usuario, setUsuario] = useState([]); // cria objetos
  const [abrir, setAbrir] = useState(false);  // cria boleanos
  const [nome, setNome] = useState('');      // cria Strings
  const [telefone, setTelefone] = useState('');  // cria Strings


   
  function add() {
    if (nome === '') {   // verifica se nome esta vazio
      alert('O nome não pode ficar vazio')
      return;
    }

    if (telefone === '') {  // verifica se telefone esta vazio
      return;
    }

    const data = { nome: nome, telefone: telefone }  // cria um objeto que tem chave (nome e telefone) 

    setUsuario([...usuario, data]);     // temos duas chave 1- pega toda as chaves que tem dentro da variavel usuario e adiciona no setUsuario  2- alem das chaves da variavel usuario adiciona as chaves de data
    setAbrir(false);   //reinicia a setAbrir como falso        
    setNome('');       // reinicia nome para vazio
    setTelefone('');  // reinicia telefone para vazio

  }


  return (
    {/* style={estilos.container} isso como fosse style='background-color: red' */ },
    {/* linha de baixo vai jogar o estilo do 'container' para 'View'  */ },

    <SafeAreaView style={estilos.container}>
      <StatusBar backgroundColor='#171d31' barStyle='light-content' />
      <View>
        <Text style={estilos.titulo}>Lista de Usuarios</Text>
      </View>



      <FlatList /*FlatList é um elemento que pode criar lista de blocos de alguma coisa */
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
          
          <Animatable.View
            animation="bounceInUp" 
            useNativeDriver  >

            <TextInput
              style={estilos.input}    // é estilo da caixa de texto
              placeholder="Insira um Nome" // é texto inicial da caixa de texto
              value={nome}  // Passa uma string para poder preencher a caixa
              onChangeText={(nome) => setNome(nome)} // atualiza o valor da caixa 
            />

            <TextInput
              style={estilos.input}   // é estilo da caixa de texto
              placeholder="Insira um Telefone"  // é texto inicial da caixa de texto
              value={telefone} // Passa uma string para poder preencher a caixa
              onChangeText={(telefone) => setTelefone(telefone)} // atualiza o valor da caixa 
            />

            <TouchableOpacity
              style={estilos.botaoModal} // estilo do botão
              onPress={add}   // qunado o botão é precionado então ele chama essa função 
            >
              <Text style={estilos.textoBotaoModal}>Salvar</Text>
            </TouchableOpacity>
          </Animatable.View>

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
    fontSize: 18,   // tamanho do texto
    color: 'white',  // cor do texto


  },

  modal: {
    flex: 1,      // Tamanho do item 
    backgroundColor: '#111', // cor de fundo 

  },
  textoModal: {
    color: '#767474', // cor do texto
    marginTop: 5,     // aumanta a margem em Cima
    marginLeft: 10,   // aumenta a margem da esquerda
    fontSize: 20,    // tamanho do texto

  },

  modalHeader: {
    marginLeft: 10, // aumenta a margem da esquerda
    marginTop: 20,   // aumanta a margem em Cima
    flexDirection: 'row',  // alinha os itens em linha
  },



  input: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize: 13
  },
  botaoModal: {
    backgroundColor: '#00335c',
    borderRadius: 5,
    margin: 5,
    padding: 12,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textoBotaoModal: {
    fontSize: 16,
    color: '#FFF',

  },
  nav: {
    backgroundColor: '#021d33',
  }

});
