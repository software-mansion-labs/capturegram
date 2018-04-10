import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default class CameraScreenPlaceholder extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Take picture!',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-camera" size={32} color={tintColor} />
      ),
    };
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFocused) {
      nextProps.navigation.goBack();
      nextProps.navigation.navigate('CameraModal');
    }
  }

  render() {
    return (<View style={styles.container} />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  }
});