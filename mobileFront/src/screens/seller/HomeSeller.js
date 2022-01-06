import React  from "react";
import { Text, View ,StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'

export const HomeSeller = ({navigation}) => {
    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.iconCar}
                    onPress={()=>{goToCar()}}
                >
                    <Ionicons name="log-out" size={35} color="black" />
                </TouchableOpacity>
            <View style={styles.personalData}>
                <View>
                    <Avatar.Image 
                    size={100} 
                    style={styles.image}
                    source={require('../../assets/estabelecimento.png')}
                    />
                </View>
                <View style={styles.personalInfor}>
                    <Text>Comercial pinheiro</Text>
                </View>
               
            </View>
            <View sytle ={styles.acountData}>
                
                <TouchableOpacity style ={styles.lastOrder}
                    onPress={()=>goToProducts()}
                >
                    <Text style ={styles.secundaryTitle}>Meus Produtos</Text>
                    <View style ={styles.establishedContainer}>
                        <View style= {styles.bar}></View>
                        <Text style ={styles.establishedText}> Visualizar todos os seus produtos </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style= {styles.followOrders}
                    onPress={()=>goToOrdemTracking()}
                >
                    <Text style={styles.primaryTitle}>Gerenciar pedidos:</Text>
                    <Text style={styles.orderText}>Nenhum em Aberto</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
    function goToProducts(){
        navigation.navigate("MyProducts");
    }

    function goToOrdemTracking(){
        navigation.navigate("ListOrder");
    }
    
    function goToCar(){
        navigation.navigate("ShoppingCart");
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection: "column",
        marginTop:60,
    },
    personalData:{
        flexDirection:"row",
        flexGrow:1,
        alignItems:"center",
        marginLeft:55
    },
    personalInfor:{
        flexDirection:"column",
        marginTop:3,
        flexGrow:2,
        marginLeft:35
    },
    containerImage:{
        flexGrow:1        
    },
    acountData:{
        flexDirection:"column",
    },
    lastOrder:{
        marginTop:20,
        width:250,
        maxHeight:"40%",
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:3
    },
    followOrders:{
        marginTop:10,
        width:250,
        maxHeight:"30%",
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:2
    },
    searchEstablishments:{
        marginTop:10,
        width:250,
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:2,
        maxHeight:"15%",
    },
    establishedContainer:{
        flexDirection:'row'
    },
    bar:{
        marginLeft:18,
        height:20,
        width:6,
        backgroundColor:"#6558F5"
    },
    secundaryTitle:{
        margin:12,
        fontSize:17,
        color:"#293845",
        fontWeight:'bold',
    },
    establishedText:{
        width:200,
        fontSize:20,
        marginLeft:12,
        color:"#6558F5",
    },
    totalText:{
        marginTop:8,
        fontSize:14,
        marginLeft:40
    },
    primaryTitle:{
        margin:8,
        fontSize:17,
        color:"#6558F5",
        fontWeight:'bold'
    },
    orderText:{
        fontSize:14,
        marginLeft:27
    },
    iconCar:{
        marginRight:20,
        marginTop: -90
    },
    iconCar:{
        flexDirection:'row',
        alignSelf: 'flex-end',
        marginRight:30,
        marginTop:20
    }
})