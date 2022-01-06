import React  from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { ItemCar } from "../../components/ItemCar";


export const ShoppingCart = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <ItemCar/>
            <ItemCar/>
            <ItemCar/>
            <ItemCar/>

            <View sytle={styles.totalArea}>
                <Text style={styles.totalText}> Total R$ 32,00 </Text>
            </View>

            <Button
                mode="contained"
                style={{marginBottom:20}}
                onPress={()=>buy()}
            >Continuar a compra</Button>

        </ScrollView>
    );

    function buy(){
        navigation.navigate('ConfirmBuyer')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding:10
    },
    totalArea:{
        height:300,
        backgroundColor:'red',
    },
    totalText:{
        fontSize:30,
        marginBottom:20,
        alignSelf:'flex-end',
    }

})