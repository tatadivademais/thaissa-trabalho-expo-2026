import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import {useRouter} from "expo-router"

export default function pagina1() {
  const router = useRouter(); 
  return (

   
      <View style={styles.container}>
        <Text className='uppercase font-extrabold'> Página Um</Text>
        
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
