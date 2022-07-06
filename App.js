import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [numero2, setNumero2] = useState('');
  let total;
  function calcular(){
    alert("Primero: " + numero + "\nSegundo: " + numero2);
    total = numero * numero2;
    alert(total);
  }
  return (
    {/* style={estilos.container} isso como fosse style='background-color: red' */ },
    {/* linha de baixo vai jogar o estilo do 'container' para 'View'  */ },
    <View style={estilos.container}>
      <Text style={estilos.titulo}>BRUNO</Text>
      <TextInput
        style={estilos.input}               // define o estilo
        placeholder="Insira um numero"      // define o texto inicial
        value={numero}                      // define o valor que vai preencher
        onChangeText={ numero => setNumero(numero)} // Permite ler o que esta escrito no input e salva em uma variavel
        keyboardType="numeric"  // permite apenas escrever numero no input
      />

       <TextInput
        style={estilos.input}               // define o estilo
        placeholder="Insira um numero 2"      // define o texto inicial
        value={numero2}                      // define o valor que vai preencher
        onChangeText={ numero2 => setNumero2(numero2)} // Permite ler o que esta escrito no input e salva em uma variavel
        keyboardType="numeric" // permite apenas escrever numero no input

      />

      <TouchableOpacity style={estilos.botao} >
        <Text 
        style={estilos.textoBotao}
        onPress={calcular}  // chama uma função apois de precionar esse botão
        >Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

// StyleSheet.create = seria igual o <style></style> do CSS 
// A linha abaixo estamos criando um estilo e denominando este estilo todo para uma constante chamada 'estilo' 
const estilos = StyleSheet.create({
  container: {
    flex: 1,      // Tamanho do item 
    backgroundColor: '#CCC', // cor de fundo

  },

  titulo: {
    color: '#767474', // cor do texto 
    textAlign: 'center',   // alinha Texto na vertical
    justifyContent: 'center', // alinha item
    fontSize: 20, // tamanho da fonte
    marginTop: 25, // tamanho da margem de cima
    marginBottom: 20, // tamanho da margem de baixo

  },


  input: {
    backgroundColor: '#767474', // cor de fundo
    borderRadius: 15, // porcentagem de arredondamento das bordas
    margin: 5, //tamanho de todas as margens 
    padding: 8, //inteiror
    color: '#FFF', //inteiror
    fontSize: 13, //inteiror


  },

  botao: {
    backgroundColor: '#005295', // cor de fundo
    borderRadius: 15, // porcentagem de arredondamento das bordas
    margin: 5, //tamanho de todas as margens 
    padding: 12, //inteiror
    color: '#FFF', //inteiror
    alignItems:'center',
    justifyContent:'center',


  },
  textoBotao: {
    fontSize: 18, 
    color: 'white', 


  },

});
