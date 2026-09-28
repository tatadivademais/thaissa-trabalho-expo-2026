import { StyleSheet, View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export default function Pagina3() {
  const router = useRouter();

  const casas = [
    {
      nome: "Grifinória",
      nivel: "Fundada por Godric Gryffindor",
      descricao: "Valoriza a coragem, a bravura, a ousadia e a nobreza de espírito.",
      corBorda: "#D3A625",
      imagem: require('../assets/casa1.jpg'), 
    },
    {
      nome: "Corvinal",
      nivel: "Fundada por Rowena Ravenclaw",
      descricao: "Valoriza a inteligência, o conhecimento, a curiosidade e a sabedoria.",
      corBorda: "#946B2D",
      imagem: require('../assets/casa2.jpg'), 
    },
    {
      nome: "Lufa-Lufa",
      nivel: "Fundada por Helga Hufflepuff",
      descricao: "Valoriza o trabalho árduo, a dedicação, a paciência, a lealdade e o fair play.",
      corBorda: "#ECB939",
      imagem: require('../assets/casa3.jpg'), 
    },
    {
      nome: "Sonserina",
      nivel: "Fundada por Salazar Slytherin",
      descricao: "Valoriza a ambição, a astúcia, a determinação e o engenho.",
      corBorda: "#AAAAAA",
      imagem: require('../assets/casa4.jpg'), 
    },
  ];

  return (
    <ImageBackground 
      source={require('../assets/fundoback.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.container}>
            
            <View style={styles.bannerContainer}>
              <MaskedView
                maskElement={
                  <Text style={styles.bannerTitle}>AS CASAS DE HOGWARTS</Text>
                }
              >
                <LinearGradient
                  colors={['#53e0db', '#ecd182', '#e67b10']} 
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={[styles.bannerTitle, { opacity: 0 }]}>AS CASAS DE HOGWARTS</Text>
                </LinearGradient>
              </MaskedView>
              
              <Text style={styles.bannerSubtitle}>Escolha o seu legado ಄</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Ionicons name="school" size={22} color="#E8C96A" />
              <Text style={styles.sectionTitle}>FUNDAÇÃO E VALORES</Text>
            </View>

            {casas.map((casa, index) => (
              <View 
                key={index} 
                style={[styles.card, { borderColor: casa.corBorda }]}
              >
                <Image source={casa.imagem} style={styles.houseImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{casa.nome}</Text>
                  <Text style={styles.cardLevel}>{casa.nivel}</Text>
                  <Text style={styles.cardDescription}>{casa.descricao}</Text>
                </View>
              </View>
            ))}

          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(6, 21, 47, 0.55)',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  bannerContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    fontFamily: 'serif',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#E8C96A',
    fontSize: 13,
    letterSpacing: 1.5,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#E8C96A',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
    letterSpacing: 1,
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(28, 55, 97, 0.85)',
    borderRadius: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1.5,
    padding: 10,
  },
  houseImage: {
    width: 65,
    height: 90,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E8C96A',
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardLevel: {
    color: '#E8C96A',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  cardDescription: {
    color: '#D1D2D8',
    fontSize: 12,
    lineHeight: 16,
  },
});