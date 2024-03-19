import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const UserProfileScreen = () => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
            {/* Profile Image */}
            {/* <Image
                source={require('./path_to_profile_image.jpg')}
                style={{ width: 50, height: 50, borderRadius: 25 }}
            /> */}

            {/* Back Button */}
            <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20 }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            {/* Favourites */}
            <TouchableOpacity style={{ marginTop: 20 }}>
                <Ionicons name="star" size={24} color="gold" />
            </TouchableOpacity>

            {/* Money Label */}
            <Text style={{ marginTop: 10 }}>Money 20</Text>

            {/* Your Profile Button */}
            <TouchableOpacity style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}>
                <Text>Your Profile</Text>
            </TouchableOpacity>

            {/* Completion Percentage */}
            <Text style={{ position: 'absolute', bottom: 20, right: 100 }}>Completion Percentage: 32%</Text>

            {/* Rating */}
            <View style={{ position: 'absolute', bottom: 20, right: 20, flexDirection: 'row' }}>
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
                <Ionicons name="star" size={20} color="gold" />
            </View>
        </View>
    );
};

export default UserProfileScreen;
