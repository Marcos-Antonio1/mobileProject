import React from 'react';
import {View,Text,StyleSheet, Alert ,KeyboardAvoidingView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import BuyerProvider from '../services/providers/BuyerProvider';

export const Registration = ({navigation}) =>{
    
    const [nome,setNome] =React.useState("")
    const [email,setEmail] =React.useState("")
    const [senha,setSenha] =React.useState("")
    const [cidade,setCidade] =React.useState("")
    const [bairro,setBairro] =React.useState("")
    const [rua,setRua] =React.useState("")

    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.textTitle}>Cadastro</Text>
            <View>
                <TextInput
                    mode="outlined"
                    label="Nome"
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Senha"
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={text => setSenha(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Cidade"
                    value={cidade}
                    onChangeText={text => setCidade(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Bairo"
                    value={bairro}
                    onChangeText={text => setBairro(text)}
                />

                <TextInput
                    mode="outlined"
                    label="Rua"
                    value={rua}
                    onChangeText={text => setRua(text)}
                />
            </View>
            <View style={{marginTop:15}}>
                <Button
                    mode="contained"
                    icon="check"
                    onPress={() =>GotoLogin()}
                >Confirmar</Button>
            </View>
        </KeyboardAvoidingView>
    );

    async function GotoLogin(){
        try{
            const dados = {
                nome,
                email,
                senha,
                cidade,
                bairro,
                rua
            }
          await  BuyerProvider.registerBuyer(dados)
        }catch(r){
            throw r;
        }
        Alert.alert("Usuário cadastrado com sucesso!")
        navigation.navigate("Login")
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        padding:20
    },
    textTitle:{
        fontSize:35,
        color:"#6558F5",
    },
    forms:{

    }
})