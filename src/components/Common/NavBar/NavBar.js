import React from "react";
import HomeButton from "./HomeButton";
import ProfileButton from "./ProfileButton";
import SearchButton from "./SearchButton";
import {StyleSheet, View} from "react-native";

export default class NavBar extends React.Component {
  render () {
    return <View style={styles.home}>
      <HomeButton/>
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