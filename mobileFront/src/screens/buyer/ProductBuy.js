import React,{useEffect,useState} from 'react';
import { View, StyleSheet, TouchableOpacity,Text,SafeAreaView,FlatList} from 'react-native';
import BuyerProvider from '../../services/providers/BuyerProvider';


export const ProductBuyer = ({navigation}) =>{
    
    const [orders,setOrders]= useState()
      
    useEffect(() => {
        getData()
    }, [])

    async function getData(){
        const data = await BuyerProvider.lastOrders()
        setOrders(data)
    }

    const _render = ({item}) =>(
        <TouchableOpacity 
        style={styles.box}
        onPress={()=>goToEspecificOrder(item)}
    >
    <View style ={styles.establishedContainer}>
                <View style= {styles.bar}></View>
                <Text style ={styles.establishedText}>{item.status} </Text>
            </View>
            <Text style ={styles.totalText}>Total: R$ {item.total},00</Text>
    </TouchableOpacity>
    );
    
    return(
        <View style={styles.container} >
              <SafeAreaView >
                <FlatList
                    data={orders}
                    renderItem={_render}
                    keyExtractor= {item =>item.id}
                />
            </SafeAreaView>
        </View>
    )

    function goToEspecificOrder(order){
        navigation.navigate('OrdemTrackingFinish',order)
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:30,
        alignItems:'center'
    },
    box:{
        width:250,
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:3,
        marginBottom:10
    },
    establishedContainer:{
        flexDirection:'row',
        alignContent:'center',
        marginTop:9
    },
    bar:{
        marginLeft:18,
        height:20,
        width:6,
        backgroundColor:"#6558F5"
    },
    establishedText:{
        fontSize:14,
        marginLeft:12,
        color:"#6558F5",
    },
    totalText:{
        marginTop:8,
        fontSize:14,
        marginLeft:40
    },
})