import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './navigation/AppNav';
import AuthContextProvider from './context/AuthContext';

export default function App() {
  return (
   <>
   <StatusBar style='dark'/>
    <AuthContextProvider>
      <AppNav/>
    </AuthContextProvider>
   </>
  );
}

