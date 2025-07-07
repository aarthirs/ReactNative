import React, {useState} from 'react';
import { Text, View, Button} from 'react-native';
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
 const {setCount} =React.useContext(TextContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button onPress={() => setCount(prev => prev + 1)} title="Count"/>
    </View>
  );
}

function SettingsScreen() {
  const nav= useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button onPress={()=>nav.navigate('Home')} title="Home" style={{padding:5 , margin:8,borderRadius:5}}/>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const TextContext= React.createContext();

function RootTabs() {
   const [count,setCount]=useState(0);
  return (
    <TextContext.Provider value={{count,setCount}}>
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={()=> <HomeScreen/>}
        options={()=>({
          tabBarBadge: count > 0 ? count : null, 
        })}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    </TextContext.Provider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootTabs />
    </NavigationContainer>
  );
}
