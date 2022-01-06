import React,{useState,useEffect} from 'react';
import { View,StyleSheet, Text} from 'react-native';
import { Avatar,Button, } from 'react-native-paper'

export const ProductDescription = ({route,navigation}) =>{
    const {product} = route.params;
    const [dataProduct,setDataProduct]= useState()

   useEffect(() => {
       setData()
   }, [])
    
    function setData() {
        setDataProduct(product);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.Maintitle}> {product.nome} </Text>
            <View style={styles.inforProduct}>
                <Avatar.Image size={120} source={{uri:product.image}}></Avatar.Image>
                <View style={styles.texto}>
                    <Text style={styles.textPrice}>R$ {product.preco},00</Text>
                </View>
            </View>
            <View >
                <Text style={styles.titleDescription}>Descrição</Text>
                <Text style={styles.description}>{product.descricao}</Text>
            </View>
        </View>
    );

    function buy(){
        navigation.navigate("ConfirmBuyer")
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
    }

})