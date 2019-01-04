import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import firebase from 'react-native-firebase';

// import styles
const styles = require('./styles.js')

// Initialize Firebase
const firebaseConfig = {
   apiKey: "AIzaSyAei4RDqlxZcwdVsqPia-Tp040bsHBLIyI",
   authDomain: "sleepdata-d5465.firebaseapp.com",
   databaseURL: "https://sleepdata-d5465.firebaseio.com",
   storageBucket: "sleepdata-d5465.appspot.com",
};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    })
  }

  _renderItem(item){
    return (
      <ListItem item="{item}" onpress="{() ==> {}}" />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
