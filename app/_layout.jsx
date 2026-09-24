import { StyleSheet, View, Text } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from "@/components/ui/button"
import { Divider } from '@/components/ui/divider';
import { Link, Stack, Tabs} from 'expo-router';
import Ionicons, { } from "@expo/vector-icons/Ionicons"

export default function App() {
  return (

    <GluestackUIProvider mode="dark">
   <Tabs initialRouteName='Pagina1' screenOptions={{headerShown: false}}>
    
  <Tabs.Screen name='Pagina1' options={{title: "Home", tabBarIcon: (color, size)=> (
<Ionicons name="home-outline" size={size} color={color} />
  )}}/>
  <Tabs.Screen name='Pagina2'/>
  <Tabs.Screen name='Pagina3'/>
   <Tabs.Screen name='index' options={{href: null}}/>
  
  
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
