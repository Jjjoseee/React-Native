/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App: () => Node = () => {
  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.red}>Benvinguts a React-Native</Text>    
        <Text style={styles.blue}>Benvinguts a React-Native</Text>
        <Text style={styles.sansSerif}>Benvinguts a React-Native</Text>     
        <Text style={styles.sansSerifCon}>Benvinguts a React-Native</Text>     
        <Text style={styles.sansSerifLight}>Benvinguts a React-Native</Text>
        <Text style={{fontFamily:'serif',fontSize:25}}>Benvinguts a React-Native</Text>  
        <Text style={{fontFamily:'Roboto',fontSize:25}}>Benvinguts a React-Native</Text>  
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  red: {
    color: 'red',
    fontSize: 25,
  },
  blue: {
    color: 'blue',
    fontSize: 35,
    fontWeight:'bold',
    fontFamily:'monospace',
  },
  notoserif: {
    fontFamily:'notoserif',
    fontSize: 25,
  },
  sansSerif: {
    fontFamily:'sans-serif',
    fontWeight:'bold',
    fontSize: 25,
  },
  sansSerifLight: {
    fontFamily:'sans-serif-light',
    fontSize: 25,
  },
  sansSerifCon: {
    fontFamily:'sans-serif-condensed',
    fontSize: 25,
  },

});

export default App;
