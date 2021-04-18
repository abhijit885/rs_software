import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import ReadRectangle from './Screen/readRectangle'
import GreenRectangle from './Screen/greenRectangle'
export default function App() {
  const [prompt, setPrompt] = useState(false);
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;
  //  const PRESSED = () => {
  //   return(
  //     <>
  //     <GreenRectangle/>
  //     </>
  //   )
  // }
  return (
    <View style={styles.container}>


      <StatusBar style="auto" />
      <View style={{marginTop:20}}>
        <Text style={{ fontSize: 25 }}>Hello</Text>
        <Text style={{ fontSize: 25 }}>Hello Hello</Text>
        <Text style={{ fontSize: 25 }}>Hello Hello Hello</Text>
        <Text style={{ position: 'absolute', top: 100, left: 0, fontSize: 25, }}>Hello Hello Hello Hello</Text>
      </View>
      {prompt ?
        <View style={{ marginLeft: 100 }}>
          <GreenRectangle />
        </View>
        :
        <>
          <View style={{ marginLeft: 100 }}>
            <ReadRectangle />
          </View>
        </>
      }
      {prompt ?
        <>
          <View style={{ height: SCREEN_HEIGHT/2, width: SCREEN_WIDTH/2, backgroundColor: '#eb1514', marginTop: 40, marginLeft: 150 }}>
            <TouchableOpacity
              onPress={() => setPrompt(true)}

            >
              <Text style={{ textAlign: 'center' }}>Press</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 145, marginTop: 10 }}>
            <Text>Button Clicked</Text>
          </View>
        </> :
        <>
          <View style={{ height: 30, width: 80, backgroundColor: '#eb1514', marginTop: 40, marginLeft: 150 }}>
            <TouchableOpacity
              onPress={() => setPrompt(true)}

            >
              <View style={{paddingTop:5}}>
              <Text style={{ textAlign: 'center',color:'#ffffff' }}>Press</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    // justifyContent: 'center',
  },
});
