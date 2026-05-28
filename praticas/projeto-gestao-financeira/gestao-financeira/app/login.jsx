import { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
 const {login} = useContext(AuthContext);
 const [username,setUsername]=useState('');
 const [password,setPassword]=useState('');

 const handleLogin = async()=>{
  try {
   await login(username,password);
   router.replace('/(tabs)');
  } catch(e){
   Alert.alert('Erro',e.message)
  }
 }

 return <View style={styles.container}>
  <Text style={styles.title}>Gestão Financeira</Text>
  <TextInput placeholder='Usuário' style={styles.input} value={username} onChangeText={setUsername} />
  <TextInput placeholder='Senha' secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
  <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttonText}>Entrar</Text></TouchableOpacity>
  <Text>Senha padrão: 123456</Text>
 </View>
}

const styles = StyleSheet.create({container:{flex:1,justifyContent:'center',padding:20},title:{fontSize:28,fontWeight:'bold',marginBottom:20,textAlign:'center'},input:{borderWidth:1,padding:12,borderRadius:8,marginBottom:12},button:{backgroundColor:'#4f46e5',padding:14,borderRadius:8},buttonText:{color:'#fff',textAlign:'center',fontWeight:'bold'}})
