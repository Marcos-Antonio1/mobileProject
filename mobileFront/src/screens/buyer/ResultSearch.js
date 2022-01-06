import React from "react";
import {View, Text,StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Estabelecimento from '../../assets/estabelecimento.png'
import { Avatar } from 'react-native-paper'
import bolacha from '../../assets/bolachaRecheada.png';


const produtos =[
    {
        id:1,
        descricao:'bolacha recheada',
        preco:"12,90",
        imagem:Image.resolveAssetSource(bolacha).uri
    },
    {
        id:2,
        descricao:'bolacha recheada',
        preco:"12,90",
        imagem:Image.resolveAssetSource(bolacha).uri
    },
    {
        id:3,
        descricao:'bolacha recheada',
        preco:"12,90",
        imagem:Image.resolveAssetSource(bolacha).uri
    },
    {
        id:4,
        descricao:'bolacha recheada',
        preco:"12,90",
        imagem:Image.resolveAssetSource(bolacha).uri
    },
    {
        id:5,
        descricao:'bolacha recheada',
        preco:"12,90",
        imagem:Image.resolveAssetSource(bolacha).uri
    },
    {
        id:6,
        descricao:'bolacha recheada',
        preco:"12,90",
        imagem:Image.resolveAssetSource(bolacha).uri
    }
]

export const ResultSearch = ({navigation}) =>{
    

    const _render = ({item}) =>(
        <TouchableOpacity style={ styles.productArea} onPress={()=>goToproduct()} >
            <Avatar.Image size={100} source={require('../../assets/bolachaRecheada.png')}></Avatar.Image>
            <View style={ styles.textDescription}>
                 <Text style={styles.textName}>{item.descricao}</Text>
                 <Text style={styles.textPrice}>R$ {item.preco}</Text>   
            </View>
        </TouchableOpacity>  
    );
    
    function goToproduct() {
        navigation.navigate("ProductDescription")
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView >
                <FlatList
                    data={produtos}
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
    },
    productArea:{
        flexDirection:'row',
        borderWidth:3,
        margin:10,
        alignItems: 'center',
        borderColor:'#C3CFD9'
    },
    textDescription:{
        marginLeft:15
    },
    textName:{
        fontSize:16,
        color:'#6054EC'
    },
    textPrice:{
        fontSize:20
    },

})