import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Text> Página home </Text>
        <Button className="bg-fuchsia-300">
          <ButtonText className= 'font-bold'>Primeiro Botão</ButtonText>
        </Button>
           <Button className="bg-fuchsia-300">
          <ButtonText className= 'font-bold'>Primeiro Botão</ButtonText>
        </Button>
           <Button className="bg-fuchsia-300">
          <ButtonText className= 'font-bold'>Primeiro Botão</ButtonText>
        </Button>
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
