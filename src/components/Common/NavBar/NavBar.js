import React from "react";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";
import SearchButton from "./SearchButton";
import {StyleSheet, View} from "react-native";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {title: "HomeScreen", onPress: this.handlePress.bind(this)}
      ]
    };
  }
  handlePress =() => {
    this.props.navigation.navigate("HomeScreen");
  }

  render () {
    return <View style={styles.home}>
      <HomeButton onPress={this.handlePress.bind(this)}/>
      <ProfileButton/>
      <SearchButton/>
    </View>;
  }
}

const styles = StyleSheet.create({
  home: {
    position: "absolute",
    alignItems: "center",
    bottom: 60,
  },
  icon: {
    left: 5,
  }
});