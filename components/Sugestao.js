import { View, Text, StyleSheet, Image } from 'react-native'

export function Sugestao() {
  return(
    <View style={styles.container}>
        <Text style={styles.sugestao}>Sugestões</Text>
      <View style={styles.linha}>
        <View style={styles.coluna}>
           <Image style={styles.imagem} source={require('../assets/img1 1.png')}/>
           <Image style={styles.imagem} source={require('../assets/img2 1.png')}/>
           <Image style={styles.imagem} source={require('../assets/OIP (4) 1.png')}/>
        </View>
         <View style={styles.coluna}>
           <Image style={styles.imagem} source={require('../assets/OIP (1).png')}/>
           <Image style={styles.imagem} source={require('../assets/OIP (2).png')}/>
           <Image style={styles.imagem} source={require('../assets/OIP (3) 1.png')}/> 

        </View>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem:{
    height: 100,
    width:100,
    borderRadius:5,
    marginLeft: -230,
    marginTop: 10,
  },
  linha:{
    flexDirection:'rom',
    flexWrap:'wrap',
  },
  coluna:{
    flexDirection:'column',
    alignItems: 'center',
    marginTop:10,
  },
  sugestao:{
    marginTop: 20,
    marginLeft: 2,
    marginRight: 25,
    borderRadius: 12,
    paddingLeft: 20,
    color:'#7AD76A',
    fontWeight: 'bold',
  },
})