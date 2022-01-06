import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Camera } from 'expo-camera';

export const RegisterProduct = ({navigation}) =>{
    const [text,setText] =React.useState("")
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Cadastro</Text>
            <View>
                <TextInput
                    mode="outlined"
                    label="Nome"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Descrição"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Quantidade"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="preco"
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
            <View style={{marginTop:15}}>
                <Button
                    mode="contained"
                    icon="check"
                    onPress={() =>goToProducts()}
                >Confirmar</Button>
            </View>
        </View>
    );

    function goToProducts(){
        navigation.navigate("MyProducts")
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