import { FlatList, View, StyleSheet } from 'react-native';
import DespesaItem from './DespesaItem';

function DespesaLista({ despesas }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={despesas}
        renderItem={DespesaItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default DespesaLista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
