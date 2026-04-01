import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import GerenciarDespesa from './screens/GerenciarDespesa';
import DespesasRecentes from './screens/DespesasRecentes';
import TodasDespesas from './screens/TodasDespesas';
import IconButton from './components/IconButton';

// Cria o navegador de abas inferiores
const Tab = createBottomTabNavigator();

// Cria o navegador de pilha nativa
const Stack = createNativeStackNavigator();

// Componente que representa as abas inferiores
function BottonTabScreen() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color="#2196F3"
            onPress={() => {
              navigation.navigate('GerenciarDespesa');
            }}
          />
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontWeight: '700',
          color: '#222',
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#9e9e9e',
      })}
    >
      {/* Aba Despesas Recentes */}
      <Tab.Screen
        name="DespesasRecentes"
        component={DespesasRecentes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
          tabBarLabel: 'Recentes',
          title: 'Despesas Recentes',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />

      {/* Aba Todas as Despesas */}
      <Tab.Screen
        name="TodasDespesas"
        component={TodasDespesas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Todas',
          title: 'Todas as Despesas',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
    </Tab.Navigator>
  );
}

// Componente raiz do App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tela principal com as abas (headerShown: false pois as abas já têm títulos) */}
        <Stack.Screen
          name="Despesas"
          component={BottonTabScreen}
          options={{ headerShown: false }}
        />

        {/* Tela de gerenciar/adicionar despesa */}
        <Stack.Screen
          name="GerenciarDespesa"
          component={GerenciarDespesa}
          options={{
            title: 'Gerenciar Despesa',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: { fontWeight: '700', color: '#222' },
            headerTintColor: '#2196F3',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
