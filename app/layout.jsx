import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import { Link, Stack, Tabs} from 'expo-router';

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
   <Tabs>
    
  <Tabs.Screen name='pagina1'/>
  <Tabs.Screen name='pagina2'/>
  <Tabs.Screen name='pagina3'/>
  
   </Tabs>

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
