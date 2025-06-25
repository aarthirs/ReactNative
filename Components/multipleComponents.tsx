import React from 'react';
import {Text, View , TextInput} from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
};

const Dog= (props: { name: any; }) =>{
  return(
    <View>
    <Text>Hello World!!</Text>
    <Text>Hi , my name is {props.name}</Text>
    <TextInput style={{height:40 , borderRadius:5, borderWidth:2, padding:5, margin:5}}    defaultValue="Enter the value"/>
    </View>
  ) 
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Dog name="thotho"/>
    </View>
  );
};

export default Cafe;
