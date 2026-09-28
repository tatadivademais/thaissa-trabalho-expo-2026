import { StyleSheet, View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export default function Pagina2() {
  const filmes = [
    { 
      titulo: "A Pedra Filosofal", 
      ano: "2001", 
      descricao: "Harry descobre seu legado mágico em Hogwarts e dá o primeiro passo rumo ao seu destino.", 
      imagem: require('../assets/filme1.jpg') 
    },
    { 
      titulo: "A Câmara Secreta", 
      ano: "2002", 
      descricao: "A escola de magia é ameaçada por uma antiga lenda e monstros misteriosos.", 
      imagem: require('../assets/filme2.jpg') 
    },
    { 
      titulo: "O Prisioneiro de Azkaban", 
      ano: "2004", 
      descricao: "Um misterioso fugitivo de Azkaban coloca a segurança de Harry à prova.", 
      imagem: require('../assets/filme3.jpg') 
    },
    { 
      titulo: "O Cálice de Fogo", 
      ano: "2005", 
      descricao: "O perigoso Torneio Tribruxo marca o retorno oficial e sombrio de Voldemort.", 
      imagem: require('../assets/filme4.jpg') 
    },
    { 
      titulo: "A Ordem da Fênix", 
      ano: "2007", 
      descricao: "Com o Ministério da Magia em negação, os estudantes formam a Armada de Dumbledore.", 
      imagem: require('../assets/filme5.jpg') 
    },
    { 
      titulo: "O Enigma do Príncipe", 
      ano: "2009", 
      descricao: "Segredos obscuros sobre o passado de Voldemort são revelados enquanto a guerra se aproxima.", 
      imagem: require('../assets/filme6.jpg') 
    },
    { 
      titulo: "As Relíquias da Morte - Parte 1", 
      ano: "2010", 
      descricao: "Harry, Rony e Hermione partem em uma jornada perigosa para caçar e destruir as Horcruxes.", 
      imagem: require('../assets/filme7.jpg') 
    },
    { 
      titulo: "As Relíquias da Morte - Parte 2", 
      ano: "2011", 
      descricao: "A grande batalha final em Hogwarts para decidir o destino do mundo bruxo.", 
      imagem: require('../assets/filme8.jpg') 
    }
  ];

  return (
    <ImageBackground 
      source={require('../assets/pena.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.container}>
            
            <View style={styles.bannerContainer}>
              <MaskedView
                maskElement={
                  <Text style={styles.bannerTitle}>FILMES DA SAGA</Text>
                }
              >
                <LinearGradient
                  colors={['#fffcbc', '#90a9e8', '#2b498e']} 
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={[styles.bannerTitle, { opacity: 0 }]}>FILMES DA SAGA</Text>
                </LinearGradient>
              </MaskedView>
              
              <Text style={styles.bannerSubtitle}>As adaptações cinematográficas ಄</Text>
            </View>

            <View style={styles.sectionHeader}>
              <Ionicons name="film" size={22} color="#E8C96A" />
              <Text style={styles.sectionTitle}>LONGAS-METRAGENS</Text>
            </View>

            {filmes.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.imagem} style={styles.movieImage} />
                <View style={styles.cardContent}>
                  <View style={styles.headerRow}>
                    <Text style={styles.cardTitle}>{item.titulo}</Text>
                    <View style={styles.yearBadge}>
                      <Text style={styles.cardYear}>{item.ano}</Text>
                    </View>
                  </View>
                  <Text style={styles.cardDescription}>{item.descricao}</Text>
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
    marginBottom: 25,
    paddingVertical: 10,
  },
  bannerTitle: {
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'serif',
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
    fontSize: 16,
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
    borderWidth: 1,
    borderColor: '#E8C96A',
    padding: 10,
  },
  movieImage: {
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 6,
  },
  yearBadge: {
    backgroundColor: 'rgba(232, 201, 106, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  cardYear: {
    color: '#E8C96A',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#D1D2D8',
    fontSize: 12,
    lineHeight: 16,
  },
});