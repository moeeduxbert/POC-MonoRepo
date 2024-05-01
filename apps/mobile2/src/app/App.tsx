import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from '@org/shared-ui-layout';
const App = () => {
  const handlePress = () => {
    console.log('Button pressed on App2');
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} text="Button on App2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
