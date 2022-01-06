import React from 'react';
import { View,StyleSheet, Text} from 'react-native';
import { Avatar,Button,TextInput } from 'react-native-paper'

export const EditProduct = ({navigation}) =>{
    const [text,setText] =React.useState("")
    return(
        <View style={styles.container}>
            <Text style={styles.Maintitle}> Bolacha recheada </Text>
            <View style={styles.inforProduct}>
                <Avatar.Image size={120} source={require('../../assets/bolachaRecheada.png')}></Avatar.Image>
            </View>
            <View >
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
            <View style={styles.bts}>
                <Button onPress={()=>update()} style={{marginRight:5}} mode="contained"> Atualizar </Button>
                <Button onPress={()=>deleteItem()} mode="contained"> Deletar </Button>
            </View>
        </View>
    );

    function update(){
        navigation.goBack();
        // navigation.navigate("MyProducts");
    }
    function deleteItem(){
        navigation.goBack();
        //navigation.navigate("MyProducts");
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20
    },
    Maintitle:{
        fontSize:25,
        color:'#6054EC',
        marginBottom:30

    },
    inforProduct :{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"center"
    },
    textPrice:{
        fontSize:35,
        marginBottom:10
    },
    texto:{
        marginLeft:50
    },
    titleDescription:{
        alignSelf:"center",
        marginTop:20,
        fontSize:29
    },
    description:{
        justifyContent:"flex-start",
    }, 
    bts:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10
    }

})