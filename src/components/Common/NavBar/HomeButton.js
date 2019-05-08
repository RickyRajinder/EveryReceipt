import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export default class HomeButton extends React.Component {

  handlePress =() => {
    this.props.navigate("HomeScreen");
  }
  render (){
    return <TouchableOpacity style={styles.home} onPress={this.handlePress}>
      <Icon.Button name="home" style={styles.icon} borderRadius={0} backgroundColor="white" size={35} color="purple"/>
    </TouchableOpacity>;
  }
}

const styles = StyleSheet.create({
  home: {
    position: "absolute",
    alignItems: "center",
    bottom: 60
  },
  icon: {
    left: 5,
  }
});

