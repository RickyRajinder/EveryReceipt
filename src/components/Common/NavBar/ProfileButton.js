import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, TouchableOpacity, View} from "react-native";

export default class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {title: "Profile", onPress: this.handlePress.bind(this)}
      ]
    };
  }
  handlePress =()=> {
    this.props.navigation.navigate("Profile");
  }

  render (){
    return <TouchableOpacity style={styles.home}>
      <Icon.Button name="user" borderRadius={0} backgroundColor="white" size={35} color="purple" onPress={this.handlePress.bind(this)}/>
    </TouchableOpacity>;
  }
}

const styles = StyleSheet.create({
  home: {
    position: "absolute",
    right: 85
  }
});