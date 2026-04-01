import { View, Text, Pressable, StyleSheet } from 'react-native';

function getDataFormatada(data) {
  return (
    data.getDate() +
    '/' +
    (data.getMonth() + 1) +
    '/' +
    data.getFullYear()
  );
}

function DespesaItem({ item }) {
  return (
    <Pressable>
      <View style={styles.itemContainer}>
        <View style={styles.itemText}>
          <Text style={styles.dataText}>{getDataFormatada(item.data)}</Text>
        </View>
        <View style={styles.itemTextMiddle}>
          <Text style={styles.descricaoText}>{item.descricao}</Text>
        </View>
        <View style={styles.itemTextRight}>
          <Text style={styles.valorText}>R$ {item.valor.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default DespesaItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemText: {
    flex: 1,
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  itemTextMiddle: {
    flex: 2,
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 2,
  },
  itemTextRight: {
    flex: 1,
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 2,
    alignItems: 'flex-end',
  },
  dataText: {
    fontSize: 12,
    color: '#666',
  },
  descricaoText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  valorText: {
    fontSize: 13,
    color: '#444',
    fontWeight: '600',
  },
});
