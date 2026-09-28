import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <GluestackUIProvider mode="dark">
      <Tabs
        initialRouteName="pagina1"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#E8C96A',     
          tabBarInactiveTintColor: '#7890B8',  
          tabBarStyle: {
            backgroundColor: '#06152F',         
            borderTopColor: '#1C3761',         
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
        <Tabs.Screen
          name="pagina1"
          options={{
            title: 'Personagens',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                 name="person-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
<Tabs.Screen
        name="pagina2"
        options={{
          title: 'Filmes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam-outline" size={size} color={color} />
          ),
        }}
      />
            

        <Tabs.Screen
          name="pagina3"
          options={{
            title: 'Casas',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        {/* Esconde a rota index padrão do Expo Router da barra de abas */}
        <Tabs.Screen
          name="index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}