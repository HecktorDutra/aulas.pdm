import { View, Text, StyleSheet } from 'react-native';

function DespesaSumario({ despesas, periodo }) {
  const somaDespesas = despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.periodoText}>{periodo}</Text>
      <Text style={styles.valorText}>R$ {somaDespesas.toFixed(2)}</Text>
    </View>
  );
}

export default DespesaSumario;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 4,
    backgroundColor: '#b3b3b3',
    borderRadius: 6,
  },
  periodoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  valorText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#b71c1c',
  },
});
