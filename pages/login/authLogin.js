import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,ImageBackground,SafeAreaView,TextInput,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from "react-redux";
import SliderModal from './otpScreen';
import { useTranslation } from 'react-i18next';
import Language from '../language/multipleLanguage';

    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};


export default function Login({navigation}) {
  //state
  const [userEmail,setUserEmail]=useState(null);
  const [loginBtn,setLoginBtn]=useState(false);
  const [valid,setValid]=useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const[lanvisible,setLanVisible]=useState(false);
  //translation
  const { t } = useTranslation(); 
  //function
  const handleChange=(e)=>{
    console.log(e.nativeEvent.text); 
    setLoginBtn(true);
    setUserEmail(e.nativeEvent.text);
  }
  const hadleSubmit=()=>{
    var mailFormat =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{11})+$/;
  if (userEmail === "") {
    setValid(" Please enter  Email/Phone Number  ");
    setLoginBtn(true);
  } else if (!mailFormat.test(userEmail)) {
    setLoginBtn(true)
    setValid("In valid Email/Phone Number");
    return false;
  } else {
    setModalVisible(true);
    // login({ user_name: userEmail, country_code: "GB" });
  }
  }
  useEffect(()=>{
   console.log(userEmail);
  },[userEmail]);

  const handleLan=()=>{
    setLanVisible(true);
  }
  return (

    <SafeAreaView style={styles.container}>
       <ImageBackground source={require('../../assets/Login.png')} resizeMode="cover" style={styles.image}>
       </ImageBackground>

       <Text style={styles.text}>India's #1 Food Delivery and Dining App</Text>

       <View style={styles.container1}>
          <View style={styles.line}></View>
          <Text style={styles.text1}>{t('screens.login.text.login')}</Text>
          <View style={styles.line}></View>
       </View>

       {/* input field */}
       <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
         placeholder={valid?valid:t('screens.login.text.email')}
         placeholderTextColor="#003f5c"
         onChange={(e)=>handleChange(e)}
         />
       </View>
       {/* input Button */}
       <View style={styles.login}>
         <Button
           title={t('screens.login.text.continue')}
           color="#28be21"
           accessibilityLabel="Learn more about this purple button"
           style={styles.loginBtn}
           onPress={hadleSubmit}
         />
      </View>

      <View style={styles.container1}>
      <View style={styles.line}></View>
      <Text style={styles.text1}>or</Text>
      <View style={styles.line}></View>
      </View>

      {/* social Button */}
      <View style={styles.social}>
      <View style={styles.socialIcons}>
      <Icon name="google" size={30} color="#4285F4" onPress={handleLan} />
      </View>

      <View style={styles.socialIcons}>
      <Icon name="apple" size={30} color="#000" />
      </View>
      </View>

      {/* privacy and policy */}

      <View style={styles.TC}>
        <Text style={styles.TC_privacy_text}>By continuing, you agree to our</Text>
        <View style={styles.TC_privacy}>
           <Text style={styles.TC_privacy_text}>Terms of Service</Text>
           <Text style={styles.TC_privacy_text1}>Privacy Policy</Text>
           <Text style={styles.TC_privacy_text2}>Content Policy</Text>
        </View>

      </View>
      {modalVisible &&
        <SliderModal visible={modalVisible} onClose={() => setModalVisible(false)} email={userEmail} setUserEmail={setUserEmail}/>
       }
      <Language lanShow={lanvisible} onClose={() => setLanVisible(false)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:"100%",
  },
  image:{
    width: 450,
    height:410,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    fontWeight: 'bold',
    margin:10,
    textAlign:'center'
  },
  
  inputView:{
    width:"80%",
    borderWidth: 2,
    borderColor: 'hsla(0, 0%, 72%, .42)',
    height:50,
    marginBottom:20,
    marginTop:20,
    justifyContent:"center",
    padding:20,
    borderRadius:10
    },
    inputText:{
    height:50,
    color:"black"
    },
    forgotAndSignUpText:{
    color:"white",
    fontSize:11
    },
    login:{
      width:"80%",
      marginBottom:20,
      borderRadius:10
    },
    loginBtn:{
      width: "80%",
      
    },
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:40,
      marginRight:40
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: 'hsla(0, 0%, 72%, .42)',
    },
    text1: {
      marginHorizontal: 5,
      fontSize: 12,
      color:'hsla(0, 0%, 82%, .62)',
    },
    social:{
    display:'flex',
    flexDirection:'row',
    marginTop:20
    },
    socialIcons:{
      width: 40,
      height: 40,
      borderRadius: 30, // Half of the width and height to create a circle
      borderWidth: 1,
      borderColor: 'hsla(0, 0%, 72%, .42)',
      paddingLeft:6,
      paddingTop:4,
      marginLeft: 10
    },
    TC:{
      marginTop:10,
    },
    TC_privacy:{
      display:'flex',
      flexDirection:'row',
      marginTop:5
    },
    TC_privacy_text:{
      textAlign:'center',
      fontSize: 12,
      marginLeft:10
    },
    TC_privacy_text1:{
      textAlign:'center',
      fontSize: 12,
      marginLeft:10
    },
    TC_privacy_text2:{
      textAlign:'center',
      fontSize: 12,
      marginLeft:10
    }


});
