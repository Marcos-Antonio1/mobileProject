import React,{useEffect,useState} from "react";
import {View, Text,StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Estabelecimento from '../../assets/estabelecimento.png'
import { Avatar } from 'react-native-paper'
import BuyerProvider from '../../services/providers/BuyerProvider';

export const ListEstabilish = ({route,navigation}) =>{
    

    const {type} = route.params;
    const [dados,setDados]= useState();
    const [title,setTitle] = useState();
    
    useEffect(() => {
         getData()
    })

    async function getData(){
        if(type == 1){
            setTitle("Hortifruits")
            const result = await BuyerProvider.hortiFruit()
            setDados(result)
        }else if(type ==2){
            setTitle("Açouque")
            const result = await BuyerProvider.acouque()
            setDados(result)

        }else if(type ==3){
            setTitle("Água")
            const result = await BuyerProvider.agua()
            setDados(result)
        }else{
            setTitle("Padaria")
            const result = await BuyerProvider.padaria()
            setDados(result)
        }
    }

    const _render = ({item}) =>(
        <TouchableOpacity style
        onPress={() =>{goToEstabeleciment(item)}}
        style={styles.establishedContainer}>
            <Avatar.Image size={70} source={{ uri:item.image}} />
            <Text style={styles.establisheText} >{item.nome}</Text>
        </TouchableOpacity>
    );
    
    function goToEstabeleciment(item) {
        navigation.navigate("Estabilish",{item})
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <SafeAreaView >
                <FlatList
                    data={dados}
                    renderItem={_render}
                    keyExtractor= {item =>item.id}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding:20
    },
    title:{
        fontSize:40,
        marginBottom:20,
        color:'#6054EC'
    },
    areaEstab:{
        
    },
    establishedContainer: {
        flexDirection:'row',
        alignItems: 'center',
        borderWidth:3,
        borderColor:'#C3CFD9',
        margin:10,
        padding:10
    },
    establisheText:{
        fontSize:15,
        marginLeft:20
    }

})