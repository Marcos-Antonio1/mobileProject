import React  from "react";
import { Text, View, StyleSheet, TouchableOpacity , Image} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput} from 'react-native-paper';
import { MyCarousel } from "../../components/MyCarrosel";

export const SeachProducts = ({navigation}) => {
    return (
        <View style={styles.container}>
{/*             <View style={styles.searchContainer}>
                <TextInput
                    style={styles.labelSearch}
                    label=""
                    mode="outlined"
                />
                <TouchableOpacity style= {styles.iconArea}
                    onPress={()=>goToSerach()}
                > 
                    <FontAwesome name="search" size={30} color="#4B5C6B" />
            </TouchableOpacity>
            </View> */}
            <View style={styles.categoryArea}>
                <MyCarousel
                />
            </View>
            <TouchableOpacity  style={styles.footArea}
             onPress={()=>goToMap()}
            >
                <Text style={styles.textFoot}>
                    Encontre os estabelecimentos mais próximos de você!
                </Text>
            </TouchableOpacity>
        </View>
    );

    function goToSerach(){
        navigation.navigate("ResultSearch")
    }

    function goToMap(){
        navigation.navigate('Maps')
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        flexDirection:"column",
    },
    searchContainer: {
        flexDirection:"row",
        marginLeft:"10%",
        marginBottom:"5%"
    },
    labelSearch:{
        width:"75%",
        height:40,
        padding:10,
        marginLeft:"5%"
    },
    iconArea:{
        flexGrow:2,
        padding:10,
        marginTop:10      
    },  
    categoryArea :{
        marginTop:30,
        flexDirection:'column',
        alignItems:'center',

    },
    firstLine:{
        flexDirection:'row',
        margin:15,
        marginBottom:8,
        marginTop:25    
    },
    secondLine:{
        flexDirection:'row',
        margin:15,
    },
    footArea:{
        borderWidth:4,
        borderColor: '#C3CFD9',
        margin:15,
        padding:20,
        paddingLeft:30,
        paddingRight:30
    },
    textFoot:{
        fontSize:18,
        color:"#6558F5"
    }
})