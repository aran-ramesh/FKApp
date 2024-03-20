import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListPageScreen from './listCard';
import { useTranslation } from 'react-i18next';
import Language from '../language/multipleLanguage';
const placeholderTexts = ['Search "briyani"', 'Search "vada pav"', 'Search "shawarma"', 'Search "burger"']; // Placeholder texts


function HomeScreen({ navigation }) {
  const { t } = useTranslation();
  const [lanvisible, setLanVisible] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0); // Index for current placeholder
  const [placeholder, setPlaceholder] = useState(placeholderTexts[0]); // Current placeholder text
  const opacity = new Animated.Value(0); // Animated value for opacity
  const translateY = new Animated.Value(-20); // Animated value for translateY

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1, // Fade in
        duration: 500, // Duration of animation
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0, // Slide down
        duration: 500, // Duration of animation
        useNativeDriver: true,
      }),
    ]).start();

    const interval = setInterval(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0, // Fade out
          duration: 500, // Duration of animation
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20, // Slide up
          duration: 500, // Duration of animation
          useNativeDriver: true,
        }),
      ]).start(() => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderTexts.length); // Cycle through placeholder texts
        setPlaceholder(placeholderTexts[(placeholderIndex + 1) % placeholderTexts.length]); // Update placeholder text

        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1, // Fade in
            duration: 500, // Duration of animation
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0, // Slide down
            duration: 500, // Duration of animation
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 2000); // Interval duration

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [placeholderIndex]);

  const handleLan = () => {
    setLanVisible(true);
  }

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.addressContainer}>
          <View style={styles.addressRow}>
            <Icon name="map-marker" size={26} color="red" style={styles.icon} />
          </View>
          <View>
            <Text style={styles.streetText}> {t('screens.list.text.home')} <Icon name="angle-down" size={20} color="black" style={styles.downicon} /></Text>
            <Text style={styles.fullAddressText}>Ram nagar 6th street...</Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          {/* <Icon onPress={handleLan}onPress={handleLan} onPress={handleLan}onPress={() => navigation.navigate('Profile')}  name="user-circle-o" size={26} color="black" style={styles.icon} /> */}
          <Icon onPress={() => navigation.navigate('Profile')} name="user-circle-o" size={26} color="black" style={styles.icon} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={20} color="red" style={styles.searchIcon} />
          <Animated.View style={[styles.placeholderContainer, { opacity }]}>
            <TextInput
              style={styles.searchInput}
              placeholder={placeholder} // Use dynamic placeholder text
              placeholderTextColor="gray" // Placeholder text color
            />

          </Animated.View>
          <Icon name="microphone" size={20} color="red" style={styles.micIcon} />
        </View>
      </View>
      <ListPageScreen />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', // Adjust color as needed
  },
  addressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  addressRow: {
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  downicon: {
    alignItems: 'center',
    marginLeft: '-10px'
  },
  streetText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullAddressText: {
    fontSize: 12,
    color: 'gray',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    padding: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    paddingRight: 10,
    shadowColor: 'rgba(100, 100, 111, 0.2)', // Shadow color
    shadowOffset: {
      width: 0,
      height: 7,
    }, // Shadow offset
    shadowOpacity: 1, // Shadow opacity
    shadowRadius: 29, // Shadow blur radius
    elevation: 5, // For Android elevation
    padding: 10

  },
  placeholderContainer: {
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    flex: 1,
  },
  searchInput: {
    flex: 1,
    border: 'none', // Removed border style to avoid conflict
  },
  searchIcon: {
    marginRight: -10,
    padding: 10,
    fontWeight: 100,
  },
  micIcon: {
    marginLeft: 10,
    borderLeftWidth: 1,
    paddingLeft: 10,
    borderLeftColor: "gray",
    paddingRight: 10

  },
});

export default HomeScreen;
