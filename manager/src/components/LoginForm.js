import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    onEmailChange(text){

    }

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="name@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
        />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
