import React, { Component } from "react";
import {Button, View} from "react-native";
import FormFields from "./../Common/FormFields";
import { styles } from "../Common/styles";
import { addExpense } from "../../actions/expenseActions";
import { connect } from "react-redux";
import HomeButton from "../Common/NavBar/HomeButton";

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

  handleNavigate = (destination) => {
    this.props.navigation.navigate(destination);
  }

  addExpense(item) {
    this.props.addExpense(item);
  }

  render() {
    let { navigate } = this.props.navigation;
    return <View style={styles.manualadd}>
      <HomeButton/>
      <Button title="back" onPress={this.handleGoBack.bind(this)}>
      </Button>
      <HomeButton navigate={this.handleNavigate("HomeScreen")}/>
      <FormFields submit={this.addExpense.bind(this)}/>
    </View>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExpense: (item) => dispatch(addExpense(item))
  };
};

export default connect(null, mapDispatchToProps)(ManualAddScreen);



