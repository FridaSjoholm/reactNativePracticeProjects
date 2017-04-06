//Import libraries
import React from 'react';
import { Text } from 'react-native';

//Make Component
const Header = () => {
  const { textStyle } = styles;
  return (
    <Text style={textStyle}>
      Albums 
    </Text>
  );
};

const styles = {
  textStyle:{
    fontSize: 40
  }
};
//Make Component available
export default Header;
