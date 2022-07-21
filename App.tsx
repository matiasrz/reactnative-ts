import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/atoms/Text'
import { Button } from '@/molecules/Button'

export default function App() {
  return (
    <View style={styles.container}>
      <Text fontSize='20px' color="black">
        Open up App.tsx to start working on your app!
      </Text>
      <Button
        color="black"
        backgroundColor="transparent"
        fontWeight="bold"
        capitalize={false}
        paddingLeft="0px"
        paddingRight="0px"
        onPress={() => console.log('onPress Function')}
      >
        Test Button
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
