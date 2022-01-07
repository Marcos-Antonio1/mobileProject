import React,{useState,useEffect} from 'react';
import {StyleSheet, FlatList,Image,View, SafeAreaView, Text,TouchableOpacity,Alert} from 'react-native';
import { Avatar, Card } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons';

export const Estabilish =({route,navigation}) =>{
    const {item} = route.params;
    const [data,setData]=React.useState('')
    const [itensCart,SetitensCart] = React.useState([])
    
    useEffect(() => {
        setData(item)
    },)

    const _render = ({item}) =>(
        <TouchableOpacity style={ styles.productArea} onPress={()=>goToDescription(item)} >
            <Avatar.Image size={100} source={{uri:item.image}}></Avatar.Image>
            <View style={ styles.textDescription}>
                 <Text style={styles.textName}>{item.nome}</Text>
                 <Text style={styles.textPrice}>R$ {item.preco},00</Text>   
            </View>
            <TouchableOpacity style={{marginLeft:20}}
             onPress={()=>addToCart(item)} 
            >
                <FontAwesome name="plus" size={30} color="green" />
            </TouchableOpacity>
        </TouchableOpacity>  
    );
    function goToDescription(product){
        navigation.navigate("ProductDescription",{product})
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconCar} 
                onPress={()=>{goToCar()}}
            >
                <FontAwesome name="shopping-cart" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.containerStore}>
                <Avatar.Image size={120} source={{uri:data.image }}></Avatar.Image>
                <Text style={styles.textTitle}>{data.nome}</Text>
            </View>
            <SafeAreaView >
                <FlatList
                    data={data.Produtos}
                    renderItem={_render}
                    keyExtractor= {item =>item.id}
                />
            </SafeAreaView>
        </View>
    );
    
    function goToCar(){
        navigation.navigate("ShoppingCart",{itensCart});
    }

    function addToCart(product){
        let itemadd = false;

        itensCart.forEach(function(elem, index){
             if(elem.idProduto == product.idProduto){
                itemadd = true;        
             }
        })

        if(!itemadd){
            SetitensCart(()=>[{ qtd_compra:1,...product},...itensCart])
            Alert.alert("Item adicionado ao carrinho!")
            
        }else{
            Alert.alert("Item já adicionado ao carrinho!")
        }
        
    }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    containerStore:{
        flexDirection:'row',
        padding:20,
        alignItems: 'center',
    },
    textTitle:{
        marginLeft:20,
        fontSize:16
    },
    containerProducts:{

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
    iconCar:{
        flexDirection:'row',
        alignSelf: 'flex-end',
        marginRight:30,
        marginTop:20

    }
})