// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import {connect} from 'react-redux'
// import Draggable from 'react-native-draggable';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Text onPress={this.props.increaseCounter}> {this.props.counter} </Text>
//         <View >
//         <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/> 
//         <View style={{backgroundColor:'blue'}}>
//         <Draggable x={0}  y={200} maxX={200} maxY={300} minX={0} minY={200}   renderColor='red' renderText='B' onDrag={(event, gestureState)=>{
//              if(gestureState.dx<=0){
//                console.log("hit"+gestureState.dx)
//              }
//         }}/>
//         </View>
//         <Draggable/>
//     <Draggable x={50} y={50}>
//     </Draggable>
//     </View>
//     <View style={{width:100,height:100,backgroundColor:'green'}}
//     onLayout={(event) => {
//       var {x, y, width, height} = event.nativeEvent.layout;
//       console.log(event.nativeEvent.layout)
//     }}></View>
//       </View>
//     );
//   }
// }

// function mapStateToProps(state){
//     return{
//         counter:state.counter
//     }
// }

// function mapDispatchToProps(dispatch){
//     return{
//         increaseCounter:()=>{
//             dispatch({type:'INCREASE'})
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)


// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     PanResponder,
//     Animated,
//     Easing,
//     Dimensions,
//     Platform,
//     TouchableOpacity,
// } from 'react-native';

// let CIRCLE_RADIUS = 36;
// let Window = Dimensions.get('window');

// export default class App extends Component {
//     constructor(props){
//         super(props);

//         this.dataDrag = [1,2,3,4];
//         this.pan = this.dataDrag.map( () => new Animated.ValueXY() );

//         this.state = {
//             showDraggable   : true,
//             dropZoneValues  : null,
//         };
//     }

//     getPanResponder(index) {
//         return PanResponder.create({
//             onStartShouldSetPanResponder: () => true,
//             onPanResponderMove              : Animated.event([null,{
//                 dx  : this.pan[index].x,
//                 dy  : this.pan[index].y
//             }]),
//             onPanResponderRelease           : (e, gesture) => {
//                 if(this.isDropZone(gesture)){
//                     this.setState({
//                         showDraggable : false
//                     });
//                 }else{
//                     Animated.spring(
//                         this.pan[index],
//                         {toValue:{x:0,y:0}}
//                     ).start();
//                 }
//             }
//         });    
//     }

//     isDropZone(gesture){
//         var dz = this.state.dropZoneValues;
//         return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
//     }

//     setDropZoneValues(event){
//         this.setState({
//             dropZoneValues : event.nativeEvent.layout
//         });
//     }

//     render(){
//         return (
//             <View style={styles.mainContainer}>
//                 <View
//                     onLayout={this.setDropZoneValues.bind(this)}
//                     style={styles.dropZone}>
//                     <Text style={styles.text}>Drop me here!</Text>
//                 </View>

//                 {this.dataDrag.map((d, index) => (
//                     <Animated.View
//                         key={index}
//                         {...this.getPanResponder(index).panHandlers}
//                         style={[styles.draggableContainer, this.pan[index].getLayout(), styles.circle]}>
//                         <Text style={styles.text}>Drag {index}</Text>
//                     </Animated.View>
//                 ))}
//             </View>
//         );
//     }
// }

// let styles = StyleSheet.create({
//     mainContainer: {
//         flex    : 1
//     },
//     dropZone    : {
//         height  : 100,
//         backgroundColor:'#2c3e50'
//     },
//     text        : {
//         marginTop   : 25,
//         marginLeft  : 5,
//         marginRight : 5,
//         textAlign   : 'center',
//         color       : '#fff'
//     },
//     draggableContainer: {
//         position    : 'absolute',
//         marginTop         : Window.height/2 - CIRCLE_RADIUS,
//         marginLeft        : Window.width/2 - CIRCLE_RADIUS,
//     },
//     circle      : {
//         backgroundColor     : '#1abc9c',
//         width               : CIRCLE_RADIUS*2,
//         height              : CIRCLE_RADIUS*2,
//         borderRadius        : CIRCLE_RADIUS
//     },
// });





import React, { Component } from 'react';
import { View, Text ,Animated,PanResponder } from 'react-native';

export default class Counter extends Component {
  textPosition={x:0,y:0}
  constructor(props) {
    super(props);
    this.position.addListener(latestPostion=>{
      this.textPosition=latestPostion
    })
    this.state = {
    };
  }
  position=new Animated.ValueXY();
  panResponder=PanResponder.create({
    onStartShouldSetPanResponderCapture:()=>true,
    onPanResponderMove:(event,gestureState)=>{
      const newPostion={x:gestureState.dx,y:gestureState.dy};
      if(newPostion.x<0<100 || newPostion.y<0<100){
      this.position.setValue(newPostion)
      console.log(newPostion)
      }
      else{
        console.log('hi')
      }
    },
    onPanResponderGrant:()=>{
      this.position.setOffset({x:this.textPosition.x,y:this.textPosition.y});
      this.position.setValue({x:0,y:0})
    },
    onPanResponderEnd:()=>{
      // this.position.flattenOffset();
    },
    
    
  })

  render() {
    return (
      <View style={{width:100,height:100,borderWidth:10}}>
      <Animated.View style={[this.position.getLayout()]} {...this.panResponder.panHandlers}>
        <Text> Counter </Text>
      </Animated.View>
      </View>
    );
  }
}
