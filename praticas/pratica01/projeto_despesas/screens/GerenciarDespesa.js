import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

function GerenciarDespesa() {
  const navigation = useNavigation();

  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // Trata mudança no campo valor: aceita apenas número com até 2 casas decimais
  const handleChangeValor = (text) => {
    const cleanText = text.replace(',', '.');
    const match = cleanText.match(/^\d*\.?\d{0,2}$/);
    if (match) {
      setValor(cleanText);
    }
  };

  // Trata a seleção de data no DateTimePicker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowPicker(false);
    setData(currentDate);
  };

  // Envia o formulário validando campos
  const handleSubmit = () => {
    if (!descricao.trim()) {
      Alert.alert('Erro', 'Por favor, informe a descrição da despesa.');
      return;
    }
    if (!valor || parseFloat(valor) <= 0) {
      Alert.alert('Erro', 'Por favor, informe um valor válido.');
      return;
    }

    Alert.alert(
      'Despesa Salva!',
      `Descrição: ${descricao}\nValor: R$ ${parseFloat(valor).toFixed(2)}\nData: ${data.toLocaleDateString('pt-BR')}`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>

      {/* Campo Descrição */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={styles.input}
          maxLength={20}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Ex: Conta de luz"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Campo Valor */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor da Despesa</Text>
        <TextInput
          style={styles.input}
          keyboardType={'decimal-pad'}
          maxLength={10}
          value={valor}
          onChangeText={handleChangeValor}
          placeholder="0.00"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Campo Data */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data da Despesa</Text>
        <Pressable
          onPress={() => setShowPicker(true)}
          style={styles.input}
        >
          <Text style={styles.dateText}>
            {data.toLocaleDateString('pt-BR')}
          </Text>
        </Pressable>
        {showPicker && (
          <DateTimePicker
            value={data}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      {/* Botão Confirmar */}
      <View style={styles.buttonContainer}>
        <Button title="Confirmar" onPress={handleSubmit} color="#2196F3" />
      </View>

      {/* Botão Cancelar */}
      <View style={styles.buttonContainer}>
        <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
          color="#9e9e9e"
        />
      </View>

    </View>
  );
}

export default GerenciarDespesa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: '#555',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    fontSize: 14,
    backgroundColor: '#fafafa',
  },
  dateText: {
    fontSize: 14,
    color: '#333',
    paddingVertical: 2,
  },
  buttonContainer: {
    marginHorizontal: 4,
    marginVertical: 6,
    borderRadius: 6,
    overflow: 'hidden',
  },
});
