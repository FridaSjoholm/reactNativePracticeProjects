//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//Make Component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        Albums
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#edd7e0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 40
  }
};
//Make Component available
export default Header;
