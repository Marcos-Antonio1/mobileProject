import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/navigation/Index';
import { HomeBuyer } from './src/screens/buyer/HomeBuyer';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </NavigationContainer>
  );
}


      