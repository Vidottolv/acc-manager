import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Logo from '../assets/logo.svg';
import colors from '../colors';
import Input from '../components/input';

const { height, width } = Dimensions.get('window');

export default function HomeScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Logo width={120} height={120} />
            <Text style={styles.title}>Account {'\n'}Manager</Text>      
        </View>
        <View style={styles.middle}>
            <Text style={styles.subtitle}>Bem-Vindo de Volta!</Text>    
            <Input
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}/>
            <Input
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,    
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  top: {
    alignItems: 'flex-start',
    height: height * 0.2,
    marginTop:'10%', 
    flexDirection:'row',
    columnGap:30
  },
  middle:{
    height: height * 0.8,
    width: width * 0.9,
    alignContent:'center'    
  },
  title: {
    fontSize: 50,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 50,
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
});