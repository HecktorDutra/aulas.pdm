import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
 const [user,setUser]=useState(null);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{(async()=>{
  const stored = await AsyncStorage.getItem('user');
  if(stored) setUser(JSON.parse(stored));
  setLoading(false);
 })()},[])

 const login = async (username,password)=>{
  if(username && password === '123456') {
   const u={name:username};
   setUser(u);
   await AsyncStorage.setItem('user',JSON.stringify(u));
   return true;
  }
  throw new Error('Usuário ou senha inválidos');
 }

 const logout = async ()=>{
  setUser(null);
  await AsyncStorage.removeItem('user');
 }

 return <AuthContext.Provider value={{user,login,logout,loading}}>{children}</AuthContext.Provider>
}
