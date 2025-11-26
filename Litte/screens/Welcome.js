import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Ласкаво просимо до Little Lemon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFEFD5' },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FF6347', textAlign: 'center', paddingHorizontal: 20 },
});
