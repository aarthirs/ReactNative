import React , {useState} from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Item =({item, backgroundColor, onPress, color})=>{
  return(
    <TouchableOpacity onPress={onPress} style={[styles.item , {backgroundColor}]}>
    <Text style ={{color}}>{item}</Text>
    </TouchableOpacity>
  )
}

const App = () => {
  const [selectedId, setSelectedId]= useState();
  const renderItem=({item})=>{
     const backgroundColor = item === selectedId ? "black" :"#eee" ; 
     const textColor = item === selectedId ? "white" :"black" ; 

     return(
       <Item 
      item={item}
       onPress={()=>setSelectedId(item)} 
       backgroundColor ={backgroundColor} 
       color ={textColor}
      
       />
     )
  };
  return(
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        extraData={selectedId}
      />
    </SafeAreaView>
  </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
