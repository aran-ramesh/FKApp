import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';



export const ProfileContext = createContext();


const placeholderTexts = ['Search "briyani"', 'Search "vada pav"', 'Search "shawarma"', 'Search "burger"'];

const UserProfileScreen = ({ navigation }) => {
    const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
    const [updateProfile, setupdateProfile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    

    // const opacity = new Animated.Value(0);
    // const translateY = new Animated.Value(-20);
    // const slideAnim = useRef(new Animated.Value(400)).current;



    const { t } = useTranslation();
    const handleView = () => {
        setupdateProfile(true);
        setIsVisible(true);
        navigation.navigate('CommonProfileSlider');
    }

    // const setContext = () => {
    //     console.log('HI Context');

    //     console.log(setAddressPopupshow);
    //     navigation.navigate();
    // }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         Animated.timing(slideAnim, {
    //             toValue: 0,
    //             duration: 300,
    //             easing: Easing.inOut(Easing.ease),
    //             useNativeDriver: true,
    //         }).start();
    //     }, 2000);
    //     return () => clearInterval(interval);
    // }, []);
    return (
        <ProfileContext.Provider
            value={{
                updateProfile, setupdateProfile,
                isVisible, setIsVisible
            }}>
            <SafeAreaView style={styles.container}>
                <Ionicons name="arrow-back" style={styles.backIcon} size={24} onPress={() => navigation.navigate('List')} color="black" />

                <Card style={styles.card}>

                    <Card.Content style={styles.cardContent}>
                        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' }} style={styles.cardImage} />
                        <Title style={styles.cardTitle}>Yagavel</Title>
                    </Card.Content>
                    <TouchableOpacity onPress={handleView}>
                        <Paragraph style={styles.cardSubtitle}>
                            {t('screens.profile.text.view activity')}
                            <Icon name="angle-right" size={12} color="red" />
                        </Paragraph>
                    </TouchableOpacity>
                </Card>

                <ScrollView>
                    <View style={styles.row}>
                        <Card style={styles.smallcard}>
                            <Card.Content>
                                <View style={{
                                    backgroundColor: '#e6e6f5',
                                    padding: 6,
                                    borderRadius: 50,
                                    alignItems: 'center',
                                    width: 35
                                }}>
                                    <Icon name="heart-o" size={24} color="black" />
                                </View>
                                <Title style={styles.cardBottomText}>{t('screens.profile.text.Favourites')}</Title>
                            </Card.Content>
                        </Card>
                        <Card style={styles.smallcard}>
                            <Card.Content>
                                <View style={{
                                    backgroundColor: '#e6e6f5',
                                    padding: 6,
                                    borderRadius: 50,
                                    alignItems: 'center',
                                    width: 35
                                }}>
                                    <Icon name="euro" size={24} color="black" />
                                </View>
                                <Title style={styles.cardBottomText}>{t('screens.profile.text.Wallet T&C')}</Title>
                            </Card.Content>
                        </Card>
                    </View>
                    {/* <Card style={styles.card}>
                <Card.Content>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="user-o" style={styles.iconbg} size={20} color="black" />
                            <Text style={styles.subheading}>Your profile</Text>
                        </View>
                        <Text style={[styles.toastText, { color: 'red', borderWidth: 1, padding: 1, borderColor: 'transparent', backgroundColor: 'lightcoral', borderRadius: 5 }]}>32% completed</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                            <Icon name="angle-right" size={16} color="black" />
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card> */}
                    {/* <Card style={styles.card}>
                <Card.Content>
                    <View style={[styles.row, { justifyContent: 'space-between' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="star-o" size={20} style={styles.iconbg} color="black" />
                            <Text style={styles.subheading}>Favourites</Text>
                        </View>
                        <Text>-- <Icon name="star-o" size={10} color="black" /></Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                            <Icon name="angle-right" size={16} color="black" />
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card> */}
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text> {t('screens.profile.text.Food Orders')}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="receipt-outline" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}> {t('screens.profile.text.Your orders')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" style={{ marginRight: 10 }} size={16} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="heart-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Favourite orders')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" style={{ marginRight: 10 }} size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="address-card-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Address book')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="eye-slash" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Hidden Restaurants')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', padding: 10, }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="question-circle-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Online ordering help')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text>Dining</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="card-sharp" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Your deals & transaction')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="fast-food-outline" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Your dining rewards')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="table" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Your table bookings')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="wechat" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Dining help')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', padding: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="question-circle-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Frequently asked questions')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>

                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text> Events</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="ticket" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Your event tickets')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5' }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="help-buoy" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Events help')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', padding: 10, }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="question-circle-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Frequently asked questions')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text> {t('screens.profile.text.Money')}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="money" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Fusion Money')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5' }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="gift" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Buy Gift Card')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="star-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Claim Gift Card')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="wallet-outline" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Fusion Wallet')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="facebook-f" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Fusion Credits')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', padding: 5 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="credit-card" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Manage payment methods')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text>{t('screens.profile.text.Fusion For Enterprise')}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="building-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.For Employers')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5' }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="person-circle-outline" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.For Employees')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text>{t('screens.profile.text.Coupons')}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="gift-outline" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Collected Coupons')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text>{t('screens.profile.text.Restaurant Awards 2024 ')}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="gift" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}> {t('screens.profile.text.Winning Awards')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                    <Card style={styles.card}>
                        <View style={styles.row}>
                            <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text>{t('screens.profile.text.More')}</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="earth" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Choose Language')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="address-card-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.About')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="pencil-square-o" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Send Feedback')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="receipt" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Get feeding receipt')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="exclamation-circle" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Report a safety emergency')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="cog" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Settings')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name="power-off" size={20} style={styles.iconbg} color="black" />
                                <Text style={styles.subheading}>{t('screens.profile.text.Logout')}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                                <Icon name="angle-right" size={16} color="black" />
                            </TouchableOpacity>
                        </View>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        </ProfileContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 10, backgroundColor: '#fff' },
    backIcon: { padding: 12 },
    iconbg: {
        backgroundColor: '#e6e6f5',
        padding: 5,
        borderRadius: 50
    },
    cardBottomText: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    border: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        paddingRight: 10
    },
    subheading: {
        marginLeft: 5,
        alignItems: 'center',
        fontSize: 16,
        marginBottom: 10,
        fontWeight: '480',
        paddingLeft: 5
    },
    FoodCard: {
        fontWeight: 'bold',
        fontSize: 15,
        justifyContent: 'center'
    },
    row: { flexDirection: 'row', paddingRight: 1 },
    smallcard: {
        justifyContent: 'space-between',
        width: '42%',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardContent: { flexDirection: 'row', alignItems: 'center' },
    cardTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
    cardImage: { width: 50, height: 50, borderRadius: 25 },
    cardSubtitle: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 14,
        color: 'red',
        paddingLeft: 75,
        fontWeight: 'bold',
        textAlign: 'left',
    }
});

export default UserProfileScreen;