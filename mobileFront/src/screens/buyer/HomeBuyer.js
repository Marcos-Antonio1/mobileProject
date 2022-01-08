import React,{useEffect,useContext}  from "react";
import { Text, View ,StyleSheet, TouchableOpacity, } from 'react-native';
import { Avatar} from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'
import {AuthContext} from '../../context/AuthContext';


export const HomeBuyer = ({navigation}) => {
    
    const {user} = useContext(AuthContext)
    const [nome,SetNome] = React.useState()
    const [dataUser,setDataUser]= React.useState([])
    const [lastOrder,setLastOrder] = React.useState()
    

    return (
        <View style={styles.container}>
            <View style={styles.personalData}>
                <View>
                    <Avatar.Image 
                    size={100} 
                    style={styles.image}
                    //source={require('../../assets/Perfil.jpeg')}
                    source = {{uri: 'data:image/jpeg;base64,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'}}
                    />
                </View>
                <View style={styles.personalInfor}>
                    <Text>{user[1].nome}</Text>
                </View>
                <TouchableOpacity style={styles.iconCar}
                    onPress={()=>{GoToEdit()}}
                >
                    <FontAwesome name="cog" size={26} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconCar}
                    onPress={()=>{Logoff()}}
                >
                    <Ionicons name="log-out" size={35} color="black" />
                </TouchableOpacity>
                
            </View>
            <View sytle ={styles.acountData}>
                
                <TouchableOpacity style ={styles.lastOrder}
                    onPress={()=>goToLastOrder()}
                >
                    <Text style ={styles.secundaryTitle}> Últimos pedidos</Text>
                    {/* <View style ={styles.establishedContainer}>
                        <View style= {styles.bar}></View>
                        <Text style ={styles.establishedText}>Pedidos do açouque tal: </Text>
                    </View>
                    <Text style ={styles.totalText}>Total : R$ 12,50</Text> */}
                </TouchableOpacity>
                
                <TouchableOpacity style= {styles.followOrders}
                    onPress={()=>goToOrdemTracking()}
                >
                    <Text style={styles.primaryTitle}>Acompanhar Pedidos</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style= {styles.searchEstablishments}
                    onPress={()=>searchEstablishments()}
                >
                    <Text style={styles.primaryTitle}>Buscar Estabelecimentos</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    function goToLastOrder(){
        navigation.navigate("ProductBuyer");
    }

    function goToOrdemTracking(){
        navigation.navigate("OrdenOpenList");
    }
    
    function searchEstablishments(){
        navigation.navigate("SearchProducts");
    }
    
    function GoToEdit(){
        navigation.navigate("EditData");
    }

    function Logoff(){
        navigation.navigate("Login")
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
        flexGrow:3,
        alignItems: "center",
        justifyContent:"center",
    },
    followOrders:{
        marginTop:10,
        width:250,
        maxHeight:"20%",
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:2,
        alignItems: "center",
        justifyContent:"center",
        
    },
    searchEstablishments:{
        marginTop:10,
        width:250,
        borderWidth:3,
        borderColor:"#C3CFD9",
        borderRadius:7,
        flexGrow:2,
        maxHeight:"15%",
        alignItems: "center",
        justifyContent:"center",
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
        fontSize:23,
        color:"#6558F5",
        fontWeight:'bold',

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
    primaryTitle:{
        margin:8,
        fontSize:17,
        color:"#6558F5",
        fontWeight:'bold',
        
    },
    orderText:{
        fontSize:14,
        marginLeft:27
    },
    iconCar:{
        marginRight:20,
        marginTop: -90
    }
})