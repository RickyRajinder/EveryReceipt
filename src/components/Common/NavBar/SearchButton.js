import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {StyleSheet, View} from "react-native";

export default class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {title: "SearchScreen", onPress: this.handlePress.bind(this)}
      ]
    };
  }
  handlePress () {
    this.props.navigation.navigate("SearchScreen");
  }
  render (){
    return <View style={styles.home}>
      <Icon.Button name="search" borderRadius={0} backgroundColor="white" size={35} color="purple" onPress={this.handlePress.bind(this)}/>
    </View>;
  }
}

const styles = StyleSheet.create({
  home: {
    position: "absolute",
    left: 85
  }
});