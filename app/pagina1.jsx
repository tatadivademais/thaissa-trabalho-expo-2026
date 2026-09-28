import { StyleSheet, View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Pagina1() {
  const personagens = [
    { 
      nome: "Harry Potter", 
      papel: "O Menino que Sobreviveu", 
      casa: "Grifinória", 
      imagem: require('../assets/harry.jpg') 
    },
    { 
      nome: "Hermione Granger", 
      papel: "A Bruxa mais Brilhante", 
      casa: "Grifinória", 
      imagem: require('../assets/hermione.jpg') 
    },
    { 
      nome: "Rony Weasley", 
      papel: "O Leal Estrategista", 
      casa: "Grifinória", 
      imagem: require('../assets/rony.jpg') 
    },
    { 
      nome: "Draco Malfoy", 
      papel: "O Herdeiro da Sonserina", 
      casa: "Sonserina", 
      imagem: require('../assets/draco.jpg') 
    },
    { 
      nome: "Luna Lovegood", 
      papel: "A Sonhadora Excêntrica", 
      casa: "Corvinal", 
      imagem: require('../assets/luna.jpg') 
    },
    { 
      nome: "Sirius Black", 
      papel: "O padrinho leal", 
      casa: "Grifinória", 
      imagem: require('../assets/sirius.jpg') 
    }
  ];

  return (
    <ImageBackground 
      source={require('../assets/castelo.jpg')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.container}>
            
            <Image 
              source={require('../assets/banner.jpg')} 
              style={styles.bannerImage} 
              resizeMode="cover"
            />

            <View style={styles.sectionHeader}>
              <Ionicons name="people" size={22} color="#E8C96A" />
              <Text style={styles.sectionTitle}>PERSONAGENS PRINCIPAIS
              </Text>
            </View>

            {personagens.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.imagem} style={styles.characterImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardName}>{item.nome}</Text>
                  <Text style={styles.cardRole}>{item.papel}</Text>
                  <View style={styles.houseBadge}>
                    <Text style={styles.cardHouse}>{item.casa}</Text>
                  </View>
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
  bannerImage: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8C96A',
    marginBottom: 25,
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
  characterImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8C96A',
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  cardName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardRole: {
    color: '#B0B1B8',
    fontSize: 12,
    marginBottom: 6,
  },
  houseBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(232, 201, 106, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  }, 
  cardHouse: {
    color: '#E8C96A',
    fontSize: 11,
    fontWeight: 'bold',
  },
});