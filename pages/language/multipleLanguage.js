import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Animated,
    Easing,
    Button,
} from 'react-native';
import {Card,RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';


export default function Language({lanShow,onClose}){
    const {i18n } = useTranslation(); 
    const [language,setLanguage]=useState(null);
    const handleLanguageChange = (lng) => {
        setLanguage(lng)
        i18n.changeLanguage(lng); // Change language
      }
      const slideAnim = useRef(new Animated.Value(1)).current;

      useEffect(() => {
          if (lanShow) {
              Animated.timing(slideAnim, {
                  toValue: 0,
                  duration: 300,
                  easing: Easing.inOut(Easing.ease),
                  useNativeDriver: true,
              }).start();
          } else {
              Animated.timing(slideAnim, {
                  toValue: 1,
                  duration: 300,
                  easing: Easing.inOut(Easing.ease),
                  useNativeDriver: true,
              }).start();
          }
      }, [lanShow]);

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={lanShow}
            onRequestClose={onClose}
        >
               
            <View style={styles.container}>
                
            <Animated.View style={[styles.modal, { transform: [{ translateY: slideAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 400] }) }] }]}>
               <View style={styles.closeButton}>
                    <TouchableOpacity onPress={onClose}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>Select Language</Text>
                <Card style={styles.lang}>
                  <Card.Content style={styles.cardContent}>
                  <RadioButton
                      value="first"
                     status={ language === 'en' ? 'checked' : 'unchecked' }
                     onPress={() =>  handleLanguageChange('en')}
                   />
                    <Text variant="titleLarge">English</Text>
                  </Card.Content>
                </Card>

                <Card style={styles.lang}>
                  <Card.Content style={styles.cardContent}>
                  <RadioButton
                      value="first"
                     status={ language === 'fr' ? 'checked' : 'unchecked' }
                     onPress={() =>  handleLanguageChange('fr')}
                   />
                    <Text variant="titleLarge">French</Text>
                  </Card.Content>
                </Card>

                <Card style={styles.lang}>
                  <Card.Content style={styles.cardContent}>
                  <RadioButton
                      value="first"
                     status={ language === 'tn' ? 'checked' : 'unchecked' }
                     onPress={() =>  handleLanguageChange('tn')}
                   />
                    <Text variant="titleLarge">Tamil</Text>
                  </Card.Content>
                </Card>

                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        position: 'absolute',
        left: 0,
        bottom: 0, // Adjust the position of the modal as needed
        width: '100%',
        height: '50%', // Increase the height of the modal
        backgroundColor: 'white',
        padding: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 10, // Adjust the position of the close button
        right: 10, // Adjust the position of the close button
    },
    text:{
        fontSize:25,
        fontWeight: 'bold',
        margin:10,
        textAlign:'left'
      },
      lang:{
        marginTop:20
      },
      cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
});


