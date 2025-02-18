import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  {
    id: '1',
    title: 'Medilens',
    subtitle: 'One-stop scan',
    image: require('../../assets/images/medilens.png'),
  },
  {
    id: '2',
    title: 'Health Space',
    subtitle: 'Get your product',
    image: require('../../assets/images/health.png'),
  },
  {
    id: '3',
    title: 'Yojana',
    subtitle: 'Ease your search',
    image: require('../../assets/images/scheme.png'),
  },
  {
    id: '4',
    title: 'Contact Sharing',
    subtitle: 'One-stop cure',
    image: require('../../assets/images/doctor.png'),
  },
  {
    id: '5',
    title: 'Donations',
    subtitle: 'Help out',
    image: require('../../assets/images/donation.png'),
  },
  {
    id: '6',
    title: 'Emergency Services',
    subtitle: 'Fast response',
    image: require('../../assets/images/add.png'),
  },
];

const news = [
  { id: '1', image: require('../../assets/images/hearing.jpeg'), title: 'Find a Hearing Aid' },
  { id: '2', image: require('../../assets/images/easy.jpg'), title: 'Easy to Fold' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
  {/* Search Bar */}
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />
    <TextInput placeholder="Search" style={styles.searchInput} />
    
    {/* Replaced Settings Icon with Reward Icon */}
    <Ionicons name="medal-outline" size={20} color="#000" style={styles.icon} />
    
    {/* Notification Icon */}
    <Ionicons name="notifications-outline" size={20} color="#000" style={styles.icon} />
  </View>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.categoryCard}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.categorySubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Emergency Banner */}
      <View style={styles.banner}>
        <Image
          source={require('../../assets/images/Emergency.jpg')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <Text style={styles.bannerText}>Emergency</Text>
      </View>

      {/* Latest News */}
      <Text style={styles.sectionTitle}>Latest News</Text>
      <FlatList
        data={news}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            <Image source={item.image} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{item.title}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F8F5', paddingHorizontal: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  icon: { marginLeft: 10 },

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  categoryImage: { width: 40, height: 40, marginBottom: 5 },
  categoryTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  categorySubtitle: { fontSize: 12, color: '#777' },

  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 10,
  },
  bannerImage: { width: '100%', height: '100%' },
  bannerText: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
  },

  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  newsItem: { width: 150, marginRight: 10 },
  newsImage: { width: '100%', height: 100, borderRadius: 10 },
  newsTitle: { fontSize: 14, marginTop: 5, textAlign: 'center' },
});
