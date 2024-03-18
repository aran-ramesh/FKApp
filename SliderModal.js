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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SliderModal = ({ visible, onClose }) => {
    const [otpCode, setOtpCode] = useState(['', '', '', '']);
    const [resendTime, setResendTime] = useState(13);

    const slideAnim = useRef(new Animated.Value(400)).current;

    useEffect(() => {
        if (visible) {
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
    }, [visible]);

    const inputs = useRef([]);
    const focusPreviousInput = (index) => {
        if (inputs.current[index - 1]) {
            inputs.current[index - 1].focus();
        }
    };
    const focusNextInput = (index) => {
        if (inputs.current[index + 1]) {
            inputs.current[index + 1].focus();
        }
    };
    const handleChangeText = (text, index) => {
        if (/^\d*$/.test(text)) {
            const newOtpCode = [...otpCode];
            newOtpCode[index] = text;
            setOtpCode(newOtpCode);

            if (text.length === 1) {
                focusNextInput(index);
            } else if (text.length === 0) {
                focusPreviousInput(index);
            }
        }
    };

    return (
        <Modal
            animationType="none"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <Animated.View style={[styles.modal, { transform: [{ translateX: slideAnim }] }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="arrow-back" style={{ paddingRight: 10 }} size={24} onPress={() => onClose()} color="black" />
                        <Text style={styles.heading}>OTP Verification</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.subHeading}>We have sent a verification code to </Text>

                    </View>
                    <Text style={styles.subHeading1}>+91-9025626989</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.otpContainer}>
                            {otpCode.map((value, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => (inputs.current[index] = ref)}
                                    style={styles.otpInput}
                                    value={value}
                                    onChangeText={(text) => handleChangeText(text, index)}
                                    maxLength={1}
                                    keyboardType="numeric"
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text>Didn't get the OTP? Resend SMS in {resendTime}s</Text>
                    </View>
                    <View style={styles.goBack}>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.redText}>Go back to login methods</Text>
                        </TouchableOpacity>
                    </View>
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
        top: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subHeading: {
        marginTop: 10,
        marginBottom: 20,
    },
    subHeading1: {
        textAlign: 'center',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginLeft: 10,
        fontSize: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    goBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100
    },

    redText: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default SliderModal;
