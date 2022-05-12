// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Counter from './src/Counter';
// import {createStore } from 'redux';
// import { Provider } from 'react-redux';

// const initialState={
//   counter:0
// }
// const reducer=(state=initialState,action)=>{
//   switch(action.type){
//     case 'INCREASE':
//       return{
//         counter:state.counter+1
//       }
//   }

//   return state;
// }
// const store =createStore(reducer);
// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Counter/>
//       </Provider>
//     );
//   }
// }



import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width:200}}>
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={"value"}
        onChange={item => {
          // setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
