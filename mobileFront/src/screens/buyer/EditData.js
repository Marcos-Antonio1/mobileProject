import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet,KeyboardAvoidingView} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {getStoragedUser} from '../../services/Storage';
import {AuthContext} from '../../context/AuthContext';
import BuyerProvider from '../../services/providers/BuyerProvider';
export const EditData = ({navigation}) =>{
    const {user} =useContext(AuthContext)
    const {updateUser} = useContext(AuthContext)

    const [nome,setNome] =React.useState(user[1].nome)
    const [email,setEmail] =React.useState(user[1].email)
    const [cidade,setCidade] =React.useState(user[1].cidade)
    const [bairro,setBairro] =React.useState(user[1].bairro)
    const [rua,setRua] = React.useState(user[1].rua)
    const id = user[1].id
    

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Editar Dados</Text>
            <KeyboardAvoidingView>
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
            </KeyboardAvoidingView>
            <View style={{marginTop:15}}>
                <Button
                    mode="contained"
                    icon="check"
                    onPress={() =>GotoLogin()}
                >Confirmar</Button>
            </View>
        </View>
    );

    async function GotoLogin(){
        const dados = {
            nome,
            email,
            cidade,
            bairro,
            rua,
            id
        }
        await BuyerProvider.updateData(dados)
        updateUser(dados)
        navigation.navigate("HomeBuyer")
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