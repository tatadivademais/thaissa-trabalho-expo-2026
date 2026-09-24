import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text className='uppercase font-extrabold'> Página dois </Text>
         <Divider className="my-3 w-52" />
        <Button className="bg-pink-300">
          <ButtonText className= 'font-bold text-white'>Primeira Página</ButtonText>
        </Button>
       <Divider className="my-3 w-20" />
           <Button className="bg-fuchsia-300">
          <ButtonText className= 'font-bold text-white'>Segunda Página</ButtonText>
        </Button>
 <Divider className="my-3 w-20" />
           <Button className="bg-blue-300">
          <ButtonText className= 'font-bold text-white'>Terceira Página</ButtonText>
        </Button>
           <Divider className="my-3 w-52" />
           <Divider className="my-3 w-52" />
      </View>
    </GluestackUIProvider>

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
