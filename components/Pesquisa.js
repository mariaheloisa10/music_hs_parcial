import { View, Text, StyleSheet } from 'react-native'

export function Pesquisa() {
  return(
    <View>
        <Text style={styles.barraDePesquisa}>Pesquisa</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
  barraDePesquisa: {
    backgroundColor: '#d3d3d3',
    marginTop: 25,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 12,
    paddingLeft: 20,
    color:'#244D1D',
    padding: 3,
  },
})
