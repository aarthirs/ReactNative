import React , { useState } from 'react';
import { Text, View, StyleSheet, Image , TextInput , Button } from 'react-native';

const UpdatedPreview = (props)=>{
  return(
  <View>
    {props.username ? 
    <Text>Hi ,{props.username}</Text> : 
    <Text>Please entry  Username!!</Text>
    } 
    { ! props.pwd &&
    <Text>Please entry  Password!!</Text>
    } 
    </View>
  )
 
}

export default function AssetExample() {
  const [username , setUsername] = useState('');
  const [pwd , setPwd]= useState('');
  const [submitted, isSubmiited]=useState(false);
  const updateLogin=()=>{
   isSubmiited(true)  
  }
  
  return (
   
    <View style={styles.container}>
    <View>
        <Text style={styles.header}>LOGIN</Text>
        <Text style={styles.paragraph}>USERNAME:</Text>
        <TextInput 
        placeholder="Enter username" 
        onChangeText={text => setUsername(text)}
        style={styles.textinput}
        />
         <Text style={styles.paragraph}>PASSWORD:</Text>
        <TextInput 
        placeholder="Enter password" 
        onChangeText={text => setPwd(text)}
        secureTextEntry
        style={styles.textinput} 
        />
        <Button title="Login" onPress={updateLogin}/>
        {submitted && <UpdatedPreview username={username} password={pwd} />}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header:{
    textAlign:'center', 
    fontWeight:'bold', 
    fontSize:20,
    padding:5
  } , 
  paragraph: {
    margin: 4,
    marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 128,
  },
  textinput:{
    padding :10,
    margin:4,
    borderWidth:3, 
    borderRadius:10
  }
});
