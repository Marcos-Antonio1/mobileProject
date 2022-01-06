import React from 'react';
import { View, Text,Image,TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const ItemCar = () =>{
    return(
        <View style={styles.boxItem}>
                <View style={styles.lineOne}>
                    <View style={styles.titleArea}>
                        <View style={styles.containerImageProduto}>
                            <Image
                                source ={require('../assets/produto1.png')}
                                style={styles.imageProducts}
                            ></Image>
                        </View>
                        <Text style={styles.textTitlePrimary}>
                            Biscoito Treloso
                        </Text>
                    </View>
                    <Text style={styles.TextDescription}>Biscoito recheado </Text>
                </View>
                <View style={styles.lineTwo}>
                        <TouchableOpacity
                            style={{marginRight: 12}}
                        >
                            <AntDesign name="minuscircleo" size={30} color="#6558F5" />
                        </TouchableOpacity>

                    <View style={styles.icons}>
                        <TouchableOpacity style={{marginLeft: 12}}>
                            <AntDesign name="pluscircleo" size={30} color="#6558F5"/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.QtdValueContainer}>
                        <View>
                            <Text style={styles.TextoValue}> 1x </Text>
                        </View>
                        <View> 
                            <Text style={styles.TextoValue}> R$ 0.00</Text>    
                        </View>
                    </View>

                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    boxItem :{ 
        flexDirection: 'column',
        backgroundColor:'#E9EFEB',
        alignItems: 'flex-start',
        marginBottom:6
    },
    lineOne: {
        margin:15
    },
    titleArea: {
        flexDirection:'row',
        margin:15
    },
    textTitlePrimary:{
        margin:20,
        fontSize:20,
        color:'#6558F5'
    },
    lineTwo: {
        flexDirection: 'row',
        margin:15,
    },
    icons: {
        flexDirection: 'row',
    },
    imageProducts:{
        width:70,
        height:70
    },
    containerImageProduto:{
        borderWidth:2,
        padding:4,
        borderRadius:50,
        backgroundColor:"#FFFFFF",
        borderColor:"#C3CFD9"
    },
    TextDescription:{
        marginLeft:"39%",
        marginTop:"-15%",
        fontSize:17,
        color:"black"
    },
    QtdValueContainer:{
        flexDirection:'row',
        alignSelf:'flex-end',
        marginLeft:"40%"      
    },
    TextoValue:{
        fontSize:20,
        fontWeight:"bold",
    }
})