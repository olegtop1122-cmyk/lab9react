import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Ласкаво просимо до Little Lemon!</Text>
      <Text style={styles.subtitle}>
        Little Lemon – це чарівне бістро, де подають прості страви та класичні коктейлі
        в жвавій, але невимушеній обстановці.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFEFD5', 
    padding: 20 
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#FF6347', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    textAlign: 'center', 
    color: '#333' 
  },
});
