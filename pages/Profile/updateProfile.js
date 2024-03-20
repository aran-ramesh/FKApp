import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Image, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Title, TextInput, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const UpdateProfile = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [anniversary, setAnniversary] = useState('');
    const [gender, setGender] = useState('');
    const { t } = useTranslation();
    const slideAnim = useRef(new Animated.Value(400)).current;

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    }, [slideAnim]);
    const inputType = 'outlined';

    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="arrow-back" style={styles.backIcon} size={24} onPress={() => navigation.navigate('List')} color="black" />
            <Animated.View style={[styles.card, { transform: [{ translateY: slideAnim }] }]}>
                <Card.Content style={styles.cardContent}>
                    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' }} style={styles.cardImage} />
                    <Title style={styles.cardTitle}>Yagavel</Title>
                    <View style={styles.row}>
                        <TextInput
                            label="Name"
                            value={name}
                            onChangeText={setName}
                            style={styles.input}
                            mode={inputType}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            label="Phone"
                            value={phone}
                            onChangeText={setPhone}
                            style={styles.input}
                            mode={inputType}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            mode={inputType}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            label="Date of Birth"
                            value={dob}
                            onChangeText={setDob}
                            style={styles.input}
                            mode={inputType}
                        />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            label="Anniversary"
                            value={anniversary}
                            onChangeText={setAnniversary}
                            style={styles.input}
                            mode={inputType}
                        />
                    </View>
                    <View style={styles.row}>
                        <Picker
                            selectedValue={gender}
                            style={styles.input}
                            mode={inputType}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Select Gender" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                    </View>
                    <Button mode="contained" onPress={() => console.log('Update Profile')}>
                        {t('updateProfileButton')}
                    </Button>
                </Card.Content>
            </Animated.View>
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
    row: { width: '100%', paddingHorizontal: 20, marginBottom: 10 },
    input: { backgroundColor: '#ffffff' },
    backIcon: { position: 'absolute', top: 10, left: 10, padding: 100 },
});

export default UpdateProfile;
