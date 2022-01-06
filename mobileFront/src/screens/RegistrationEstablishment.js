import React from 'react';
import {View,Text,StyleSheet,ScrollView, Picker} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export const RegistrationEstablishment = ({navigation}) =>{
    const [text,setText] =React.useState("")
    const [selectedValue,setSelectedValue]= React.useState()
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Cadastro</Text>
            <ScrollView>
                <TextInput
                    mode="outlined"
                    label="Nome"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Senha"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Cidade"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="Bairo"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    mode="outlined"
                    label="Rua"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    mode="outlined"
                    label="número"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <Text>Tipo de estabelecimento </Text>
                <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 300,border: '1px solid'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Comercio Geral" value="1" />
                <Picker.Item label="Açouque" value="2" />
                <Picker.Item label="padaria" value="3" />
                <Picker.Item label="hortifrut" value="4" />
                </Picker>
            </ScrollView>
            <View style={{marginTop:15}}>
                <Button
                    mode="contained"
                    icon="check"
                    onPress={() =>GotoLogin()}
                >Confirmar</Button>
            </View>
        </View>
    );

    function GotoLogin(){
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

    },
    textOp:{

    }
})