import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View>
        <Text> Employee A </Text>
        <Text> Employee B </Text>
        <Text> Employee C </Text>
        <Text> Employee D </Text>
        <Text> Employee E </Text>
        <Text> Employee F </Text>
        <Text> Employee G </Text>
      </View>
    );
  }
}

export default connect(null, { employeesFetch })(EmployeeList);
