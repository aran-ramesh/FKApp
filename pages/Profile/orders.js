import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Title } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import CommonSlider from './CommonPopup';

const Orders = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="arrow-back" style={styles.backIcon} size={24} onPress={() => navigation.navigate('List')} color="black" />
            <View style={styles.card}>
                {/* <Card.Content style={styles.cardContent}>
                    <Title style={styles.cardTitle}>Hello Yagavel</Title>
                </Card.Content> */}
                <View style={styles.sliderContent}>
                    <Title>Orders Hi yagavel</Title>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: 10, backgroundColor: '#fff', marginTop: 100 },
    cardContent: { alignItems: 'center' },
    cardTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
    cardImage: { width: 50, height: 50, borderRadius: 25 },
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
    sliderContent: { alignItems: 'center' },
    backIcon: { position: 'absolute', top: 10, left: 10, padding: 100 },
});

export default Orders;
