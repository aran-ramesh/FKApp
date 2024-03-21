import React, { useRef, useEffect, useContext, createContext } from 'react';
import { View, StyleSheet, Animated, Easing, Modal } from 'react-native';
import UpdateProfile from './updateProfile';
import Orders from './orders';
import ProfileContext from './UserProfileScreen';
import { useSSR } from 'react-i18next';


const CommonSlider = ({ onClose = false }) => {
    const slideAnim = useRef(new Animated.Value(400)).current;
    const { isVisible, updateProfile } = useContext(ProfileContext);
    useEffect(() => {
        console.log(isVisible);
    }, [])

    useEffect(() => {
        if (isVisible) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 400,
                duration: 300,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible]);

    return (

        <Modal
            animationType="none"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>

                    {updateProfile && <UpdateProfile />}


                </Animated.View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
});

export default CommonSlider;
