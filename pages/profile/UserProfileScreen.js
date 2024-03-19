import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const placeholderTexts = ['Search "briyani"', 'Search "vada pav"', 'Search "shawarma"', 'Search "burger"'];

function UserProfileScreen({ navigation }) {
    const [placeholder, setPlaceholder] = useState(placeholderTexts[0]);
    const opacity = new Animated.Value(0);
    const translateY = new Animated.Value(-20);

    useEffect(() => {
        const interval = setInterval(() => {
            Animated.parallel([
                Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true }),
                Animated.timing(translateY, { toValue: 20, duration: 500, useNativeDriver: true }),
            ]).start(() => {
                setPlaceholder(placeholderTexts[index]);
                Animated.parallel([
                    Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }),
                    Animated.timing(translateY, { toValue: 0, duration: 500, useNativeDriver: true }),
                ]).start();
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="arrow-back" style={styles.backIcon} size={24} onPress={() => onClose()} color="black" />
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' }} style={styles.cardImage} />
                    <Title style={styles.cardTitle}>Yagavel</Title>
                </Card.Content>
                <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                    <Paragraph style={styles.cardSubtitle}>View activity <Icon name="angle-right" size={12} color="red" /></Paragraph>
                </TouchableOpacity>
            </Card>
            <View style={styles.row}>
                <Card style={styles.smallcard}>
                    <Card.Content>
                        <Icon name="heart-o" size={24} color="black" style={styles.icon} />
                        <Title style={styles.cardBottomText}>Favourites</Title>
                    </Card.Content>
                </Card>
                <Card style={styles.smallcard}>
                    <Card.Content>
                        <Icon name="euro" size={24} color="black" style={styles.icon} />
                        <Title style={styles.cardBottomText}>Wallet T&C</Title>
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
                    <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text> Food Orders</Text>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="first-order" size={20} style={styles.iconbg} color="black" />
                        <Text style={styles.subheading}>My Order</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Icon name="angle-right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="map-marker" size={20} style={styles.iconbg} color="black" />
                        <Text style={styles.subheading}>Order Status</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Icon name="angle-right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', padding: 5 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="address-book" size={20} style={styles.iconbg} color="black" />
                        <Text style={styles.subheading}>Address Book</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Icon name="angle-right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={styles.row}>
                    <Text style={styles.FoodCard}>  <Text style={styles.border}>|</Text> Food Orders</Text>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="first-order" size={20} style={styles.iconbg} color="black" />
                        <Text style={styles.subheading}>My Order</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Icon name="angle-right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: 7, borderBottomWidth: 1, padding: 10, borderBottomColor: '#e6e6f5', marginBottom: 10 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="map-marker" size={20} style={styles.iconbg} color="black" />
                        <Text style={styles.subheading}>Order Status</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Icon name="angle-right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', padding: 5 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="address-book" size={20} style={styles.iconbg} color="black" />
                        <Text style={styles.subheading}>Address Book</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                        <Icon name="angle-right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
            </Card>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 10, backgroundColor: '#fff' },
    backIcon: { paddingRight: 10 },
    iconbg: {
        backgroundColor: '#e6e6f5',
        padding: 5,
        borderRadius: 50
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
        // height: 5,
        paddingRight: 10
    },
    subheading: {
        marginLeft: 5,
        alignItems: 'center',
        // fontSize: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    FoodCard: {
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    row: { flexDirection: 'row', paddingRight: 1 },

    smallcard: {
        padding: 2,
        width: '45%',
        height: 80,
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
    cardSubtitle: { marginTop: 10, fontSize: 14, color: 'red', fontWeight: 'bold', textAlign: 'center' },
    // Define other styles as needed
});

export default UserProfileScreen;
