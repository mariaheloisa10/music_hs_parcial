import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Pesquisa } from './components/Pesquisa'
import { Sugestao } from './components/Sugestao'

export default function App(){
  return(
    <SafeAreaView>
       <Text style={styles.titulo}> Misic HS</Text>
       <Text style={styles.subtitulo}> Novidades aqui temos!</Text>
       
       <Pesquisa/>
       <Sugestao/>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create ({
  titulo: {
    color: '#244d1d',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },

  subtitulo: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
})