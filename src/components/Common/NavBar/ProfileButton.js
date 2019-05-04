import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, View} from "react-native";

export default class ProfileButton extends React.Component {

  handlePress() {
    this.props.navigation.navigate("Profile");
  }

  render (){
    return <View style={styles.home}>
      <Icon.Button name="user" borderRadius={0} backgroundColor="white" size={35} color="purple" onPress={this.handlePress.bind(this)}/>
    </View>;
  }
}

const styles = StyleSheet.create({
  home: {
    position: "absolute",
    right: 85
  }
});