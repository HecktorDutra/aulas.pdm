# Projeto Despesas - React Native (Aulas 07 e 08)

Aplicativo de gerenciamento de despesas desenvolvido nas aulas de Programação para Dispositivos Móveis do IESB.

---

## Estrutura do Projeto

```
projeto_despesas/
├── App.js                          ← Raiz do app + navegação (Stack + Bottom Tabs)
├── app.json
├── index.js
├── package.json
├── babel.config.js
│
├── screens/
│   ├── TodasDespesas.js            ← Lista todas as despesas
│   ├── DespesasRecentes.js         ← Filtra os últimos 7 dias
│   └── GerenciarDespesa.js         ← Formulário para adicionar despesa
│
└── components/
    ├── IconButton.js               ← Botão de ícone reutilizável (Ionicons + Pressable)
    └── despesa/
        ├── DespesaItem.js          ← Item individual da lista
        ├── DespesaLista.js         ← FlatList de despesas
        ├── DespesaSumario.js       ← Resumo com período e soma total
        └── DespesaSaida.js         ← Junta Sumário + Lista
```

---

## Instalação e Execução

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Expo Go no celular **ou** emulador Android/iOS

### 2. Instalar dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Em seguida, instale os pacotes nativos com Expo:

```bash
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-native-community/datetimepicker
```

### 3. Instalar as bibliotecas de navegação

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

### 4. Rodar o projeto

```bash
npx expo start
```

Escaneie o QR Code com o app **Expo Go** no celular ou pressione:
- `a` para abrir no Android Emulator
- `i` para abrir no iOS Simulator

---

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Despesas Recentes** | Exibe despesas dos últimos 7 dias (filtragem automática por data) |
| **Todas as Despesas** | Exibe todas as despesas cadastradas com total |
| **Sumário** | Mostra o período e o valor total das despesas |
| **Lista** | FlatList otimizada com data, descrição e valor de cada item |
| **Gerenciar Despesa** | Formulário com descrição, valor (decimal-pad) e seletor de data |
| **DateTimePicker** | Seleção nativa de data |
| **Navegação** | Bottom Tabs (Recentes / Todas) + Stack (GerenciarDespesa) |
| **IconButton** | Botão "+" no canto superior direito para adicionar nova despesa |

---

## Conceitos aplicados (conforme aulas)

- **Aula 07:** React Navigation, NavigationContainer, createBottomTabNavigator, createNativeStackNavigator, Ionicons, useNavigation, headerRight, tabBarIcon
- **Aula 08:** FlatList, reduce(), toFixed(), Date (getDate/getMonth/getFullYear), TextInput, DateTimePicker, useState, desestruturação de props, Pressable com pressed

---

## Professor

Prof. José Alberto S. Torres — IESB Centro Universitário
