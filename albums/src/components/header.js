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
    backgroundColor: '#f2e1e8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
};
//Make Component available
export default Header;
