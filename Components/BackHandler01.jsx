import React, {useEffect} from 'react';
import {Text, StyleSheet, BackHandler, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
   useEffect(()=>{
      const backActionBtn = () =>{
        Alert.alert('Hold on!', "you have selected the back button" , [{
          text:'Cancel', 
          onPress:()=>null ,
          style:'cancel'
        },{
          text:'Yes', 
          onPress:()=>BackHandler.exitApp()
        }]);
        return true ;
      } 
      const backHandler=BackHandler.addEventListener('hardwareBackPress', backActionBtn);
      return ()=>backHandler.remove();}
   ,[])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Click Back button!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
