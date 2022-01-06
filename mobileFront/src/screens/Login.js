import React ,{useContext} from "react";
import { 
    View, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    Alert
} from "react-native";

import { Avatar , Button} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext'; 



export const Login = ({navigation}) => {

   const {handlerLogin} =useContext(AuthContext)

    const [email,setEmail] =React.useState("")
    const [senha,setSenha] =React.useState("")
    
    return (
        <View style= {styles.container}>
            <Avatar.Image 
            size={180} 
            style={styles.logo}
            />

        <SafeAreaView style ={ styles.inputs} >
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={text => setSenha(text)}
            />
            </SafeAreaView>

            <View style={styles.actionContainer}>
                <Button
                    style ={ styles.Bt}
                    mode="contained"
                    onPress={()=>goToHome()}
                >
                    Entrar
                </Button>
                <Button
                style ={ styles.Bt}
                onPress={()=>goToRegisterClient()}
                >
                    Cadastre-se
                </Button>
                {/* <Button
                style ={ styles.Bt1}
                onPress={()=>goToRegisterEstablishment()}
                >
                    Cadastre-se como estabelecimento
                </Button> */}
            </View>
        </View>
    );

    async function goToHome(){
        const dados = {
            email,
            senha
        }

        /* const resul =await BuyerProvider.login(dados) */
        const resul =await handlerLogin(dados)
         if(resul[0].logged == true){
            navigation.navigate("HomeBuyer")
        }else{
            Alert.alert("Email ou Senha Incorreto! ")
        }  
    }

    function goToRegisterClient(){
        navigation.navigate('Registration');
    }

    function goToRegisterEstablishment(){
        navigation.navigate("RegistrationEstablishment")
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        marginTop:90
    },
    logo:{
        alignSelf:'center'
    },
    inputs:{
        marginTop:30
    },
    input: {
        height: 40,
        width:230,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius:5,
        alignSelf:'center'
    },
    actionContainer :{
        flex:1,
        flexDirection:'column'
    },
    Bt:{
        width:150,
        height:40,
        alignSelf:'center',
        marginTop:10
    },
    Bt1:{
        width:500,
        height:40,
        alignSelf:'center',
        fontSize:12
    }
  });