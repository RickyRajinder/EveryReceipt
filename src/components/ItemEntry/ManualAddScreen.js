import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FormFields from "./../Common/FormFields";
import { styles } from "../Common/styles";
import { addExpense } from "../../actions/expenseActions";
import { connect } from "react-redux";

class ManualAddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      items: [],
      total: 0
    };
  };

  handleGoBack() {
    this.props.navigation.navigate("HomeScreen");
  }

  addExpense(item) {
    this.props.addExpense(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleGoBack.bind(this)}>
          <Text>
            Cancel
          </Text>
        </TouchableOpacity>
        <FormFields submit={this.addExpense.bind(this)} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (item) => dispatch(addExpense(item))
  };
};

export default connect(null, mapDispatchToProps)(ManualAddScreen);





