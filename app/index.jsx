import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import { Link } from 'expo-router';

export default function App() {
  return (

    
      <View style={styles.container}>
        <Text className='uppercase font-extrabold'> Página home </Text>
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
