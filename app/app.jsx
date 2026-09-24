import { StyleSheet, View, Text } from 'react-native';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import { Link } from 'expo-router';

export default function App() {
  return (

    
      <View style={styles.container}>
        <Text className='uppercase font-extrabold'> Página home </Text>
         <Divider className="my-3 w-52" />
        < Link href="/pagina1" asChild>
        <Button className="bg-pink-300">
          <ButtonText className= 'font-bold text-white'>Primeira Página</ButtonText>
        </Button>
        </Link>
       <Divider className="my-3 w-20" />
           <Button className="bg-fuchsia-300">
          <ButtonText className= 'font-bold text-white'>Segunda Página</ButtonText>
        </Button>
 <Divider className="my-3 w-20" />
           <Button className="bg-blue-300">
          <ButtonText className= 'font-bold text-white'>Terceira Página</ButtonText>
        </Button>
           <Divider className="my-3 w-52" />
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
