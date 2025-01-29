import{ SafeAreaView, View, StyleSheet, Text, FlatList, Image } from 'react-native'


export default function App(){
  return(
    <SafeAreaView style = {styles.container}>
    <Text style = {styles.titulo}> Besteirinhas Doces </Text>
      <FlatList 
      data={Besteirinhas}
      renderItem={({item})=>
        <View>
            <Text style = {styles.sub}> {item.doces} 
            <Image style = {styles.imagem} source={item.img}></Image></Text>
            <Text style = {styles.des}> {item.descricao} </Text>
        </View>

      }
      
      />

    </SafeAreaView>
  )
}

const Besteirinhas = [
  {doces:'Torta de Brigadeiro',img: require('./assets/torta-de-brigadeito.jpg'),descricao:'Uma torta de brigadeiro é uma sobremesa deliciosa com camadas de chocolate cremoso e cobertura de granulado' },

  {doces:'Mousse',img: require('./assets/mousse.jpg'),descricao:'Uma sobremesa leve e arejada, feita com uma base de creme ou purê de frutas, misturada com claras de ovo batidas ou chantilly. Pode ser de chocolate, frutas ou outros sabores.' },

  {doces:'Macaroons-rosa',img: require('./assets/macaroons-rosa.jpg'),descricao:'Pequenos biscoitos franceses feitos com farinha de amêndoa, açúcar e claras de ovo, recheados com ganache, creme de manteiga ou geleia' },

  {doces:'Donuts',img: require('./assets/donuts.jpg'),descricao:'Rosquinhas fritas ou assadas, geralmente cobertas com glacê, açúcar ou recheadas com cremes e geleias. Podem ter uma variedade de coberturas e recheios' },

  {doces:'Cupcakes',img: require('./assets/cupcakes.jpg'),descricao:'Pequenos bolos individuais, assados em forminhas de papel e decorados com cobertura de creme, glacê e outros enfeites.' },

];

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#1564'
  },
  titulo:{
    fontSize:35,
    marginTop:70,
    textAlign:'center',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  sub:{
    fontSize:30,
    textAlign:'center',
    margin:20,
    color:'red',
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
 des:{
   fontSize:20,
   backgroundColor:'#1691',
   margin:5,
   borderRadius: 10,
   borderWidth:1,
   fontWeight: 'bold',
    fontFamily: 'Arial',
 },
 imagem:{
   height:300,
   borderRadius: 25,
   borderWidth:5
 }
})