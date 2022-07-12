
# Sobre o projeto

Esse é o primeiro projeto que eu construir utilizando react native para um FRONT-END

A aplicação consiste em adicionar e listar os dados em um dispositivo mobile

## Layout mobile
  
  <div style="display: inline-block;">
  <img  alt="Bruno-Java"  width="320" src="https://user-images.githubusercontent.com/107335359/178506133-6fdf0ab8-ca98-49b3-b695-86b1123a4641.png">
  ---
  <img  alt="Bruno-Java"  width="320" src="https://user-images.githubusercontent.com/107335359/178510151-e888597a-b260-410a-80a3-edde7c7a8cc4.png">
  </div>

# Tecnologias utilizadas
## Front end
- HTML / CSS / JS 
- React Native
- Expo
- Android Studio

## Componentes do React
- StatusBar
```
 <StatusBar backgroundColor='#171d31' barStyle='light-content' />
```

- Text      
```
 <Text style={estilos.titulo}>Lista de Usuarios</Text> 
```

- FlatList      
``` 
   <FlatList /*FlatList é um elemento que pode criar lista de blocos de alguma coisa */
      marginHorizontal={20} // adiciona uma margem na horizontal para cada item
      showsHorizontalScrollIndicator={false} // barra de rolagem não aparece
      data={usuario} // são as dados que vai a lista
      keyExtractor={(item) => String(item.key)} // chave primaria, coluna indentificação é objeto com nome "key"
      renderItem={({ item }) => < UsuarioList data={item} />} // Data recebe o objetos criandos
   ></FlatList>```
```
- TextInput      
```
<TextInput
  style={estilos.input}    // é estilo da caixa de texto
  placeholder="Insira um Nome" // é texto inicial da caixa de texto
  value={nome}  // Passa uma string para poder preencher a caixa
  onChangeText={(nome) => setNome(nome)} // atualiza o valor da caixa 
/>
```
- TouchableOpacity      
```
<TouchableOpacity
   style={estilos.botao} // Defina um estilo para o botão
   onPress={() => setAbrir(true)}  // chama uma função apois de precionar esse botão
   >
   <Ionicons name='ios-add' size={35} color='white' // cria um icone com um tamanho e cor 
   />
</TouchableOpacity>
```

- Animatable.View    
```
<Animatable.View           // cria uma tela de animação
  animation="bounceInUp"   // tipo de animação
  useNativeDriver        // Drive que precisa utilizar com  Animatable
  duration={1000}        //A duração da animação
>

</Animatable.View>

```

- Modal  
  - animationType : O animationTypeprop controla como o modal é animado
  - slide: desliza a partir do fundo,
  - fade: desaparece à vista,
  - none: aparece sem uma animação.       
```
<Modal
  animationType="slide"
  transparent={false} // define se o fundo vai ser transparente
  visible={false}    //  define se vai ser visivel(true) ou oculto(false)
>

</Modal>
```

# Autor

Bruno Lopes Soares
