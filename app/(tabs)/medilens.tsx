import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Assuming MaterialCommunityIcons has similar icons
import Calender from '../components/calender';

const App = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Best medicine app to order medicines. I have been ordering from this app for 2 years, I don't have any better medicine than this app in the world, I have saved more than Rs 12500 in these days. Delivery is also much better than before.",
      author: "Ramesh Agrawal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&fit=crop"
    },
    {
      text: "Substitution saves money! I have saved more than Rs 8000 by substituting medicines with Medilens. Truemeds.Thanks for the great service.",
      author: "Dhirendra Prasad",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=50&fit=crop"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Icon name="magnify" size={20} color={isSearchFocused ? '#10B981' : '#9CA3AF'} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for medicines"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop" }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Medilens Header */}
        <View style={styles.medilensHeader}>
          <Text style={styles.medilensTitle}>Medilens</Text>
          <Text style={styles.medilensSubtitle}> are the smarter choice</Text>
        </View>

        {/* Video Section */}
        <View style={styles.videoSection}>
          <View style={styles.videoContent}>
            <View>
              <Text style={styles.videoHeading}>how{'\n'}to use</Text>
              <Text style={styles.videoSubheading}>Medilens</Text>
              <Text style={styles.videoDescription}>With Substitutes medicines</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶️</Text>
            </TouchableOpacity>
          </View>

          {/* Features */}
          <View style={styles.featuresGrid}>
            {[
              { icon: 'shield-check', text: "Certified Medicines" },
              { icon: 'beaker', text: "Same Composition" },
              { icon: 'clock', text: "Savings upto 51%" },
              { icon: 'star', text: "Top1% Brands" }
            ].map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Icon name={feature.icon} size={24} color="#10B981" />
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Learn More</Text>
            <Icon name="chevron-right" size={16} color="#3B82F6" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewExampleButton}>
            <Text style={styles.viewExampleText}>View example for better understanding</Text>
          </TouchableOpacity>
        </View>

        {/* Schedule Section */}
        <View>
        <Calender/>
        </View>

        {/* Testimonials */}
        <View style={styles.testimonialsSection}>
          <Text style={styles.testimonialsTitle}>What our customers have to say</Text>
          <View style={styles.testimonialCards}>
            {testimonials.map((testimonial, index) => (
              <Animated.View
                key={index}
                style={[
                  styles.testimonialCard,
                  activeTestimonial === index ? styles.activeTestimonial : styles.inactiveTestimonial
                ]}
              >
                <Text style={styles.testimonialText}>"{testimonial.text}"</Text>
                <View style={styles.authorInfo}>
                  <Image source={{ uri: testimonial.image }} style={styles.authorImage} />
                  <Text style={styles.authorName}>{testimonial.author}</Text>
                </View>
              </Animated.View>
            ))}
          </View>
          <View style={styles.testimonialIndicators}>
            {testimonials.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.indicator,
                  activeTestimonial === index && styles.activeIndicator
                ]}
                onPress={() => setActiveTestimonial(index)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Banner */}
      <View style={styles.bottomBanner}>
        <Text style={styles.bannerText}>FLAT 25% off on first recharge</Text>
        <TouchableOpacity style={styles.rechargeButton}>
          <Text style={styles.rechargeButtonText}>recharge</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 80, // Space for bottom banner
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginTop: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  profileButton: {
    marginLeft: 8,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ECFDF5',
  },
  medilensHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  medilensTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  medilensSubtitle: {
    fontSize: 16,
    color: '#4B5563',
  },
  videoSection: {
    backgroundColor: '#F0FDF4',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
  },
  videoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  videoSubheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#14532D',
    marginTop: 4,
  },
  videoDescription: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  playButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    fontSize: 16,
    color: '#6B7280',
  },
  featuresGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  featureItem: {
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 4,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  learnMoreText: {
    fontSize: 14,
    color: '#3B82F6',
    marginRight: 4,
  },
  viewExampleButton: {
    alignSelf: 'center',
    marginTop: 8,
  },
  viewExampleText: {
    fontSize: 12,
    color: '#6B7280',
  },
  scheduleSection: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleTitle: {
    fontSize: 16,
    color: '#1F2937',
  },
  scheduleHighlight: {
    color: '#10B981',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  calendarButtonText: {
    fontSize: 14,
    color: '#14532D',
    marginLeft: 4,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  calendarDay: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    margin: 2,
  },
  activeDateCell: {
    backgroundColor: '#ECFDF5',
  },
  dateText: {
    fontSize: 14,
    color: '#1F2937',
  },
  medicationSchedule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  medicationText: {
    fontSize: 14,
    color: '#14532D',
    marginLeft: 8,
  },
  testimonialsSection: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  testimonialsTitle: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 8,
  },
  testimonialCards: {
    position: 'relative',
    height: 120,
  },
  testimonialCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    opacity: 0,
    transform: [{ translateY: 20 }],
  },
  activeTestimonial: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
  inactiveTestimonial: {
    opacity: 0,
    transform: [{ translateY: 20 }],
  },
  testimonialText: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 8,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ECFDF5',
  },
  authorName: {
    fontSize: 12,
    color: '#1F2937',
    marginLeft: 8,
  },
  testimonialIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  activeIndicator: {
    width: 16,
    backgroundColor: '#10B981',
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4C1D95',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bannerText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  rechargeButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  rechargeButtonText: {
    fontSize: 14,
    color: '#4C1D95',
  },
});

export default App;