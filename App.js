/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [number,setNumber]=React.useState('');
  return (
    <>
      
      <SafeAreaView  >
        
      </SafeAreaView>
      <View style={{alignItems: 'center',borderWidth:3}}>
        <View ><Text >Calculator</Text></View>
        <View>
          <TextInput style={{borderWidth:1, width:150}}  onChangeText={text=>{
          let num = Number(text);
          if(!isNaN(num))
            setNumber(text)}

        }
        value={number}/>
        <TouchableOpacity>
    <View style={{
    marginBottom: 10,
    height:40,
    width: 40,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  }}>
            <Text style={{
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }}>1</Text>
          </View>
          </TouchableOpacity>
        </View >
        <View style={{flexDirection: 'row'}} >
       
        <Button   title="1" />
        <Button title="2" />
        <Button title="3" />
        <Button title="+" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="4" />
        <Button title="5" />
        <Button title="6" />
        <Button title="-" /></View>
        
        <View style={{flexDirection: 'row'}}>
          <Button title="7" />
        <Button title="8" />
        <Button title="9" />
        <Button title="*" /></View>
        <View style={{flexDirection: 'row'}}>
          <Button title="." />
        <Button title="0" />
        <Button title="/" />
        <Button title="=" /></View>
        </View>
    </>
  );
};

export default App;
