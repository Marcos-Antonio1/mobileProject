import React from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView,Picker,Alert} from 'react-native';
import { Button } from 'react-native-paper';



export const ConfirmBuyer = ({navigation}) => {
    const [selectedValue,setSelectedValue]=React.useState()
    const[method,setMethod] =React.useState()
    
    return (
        <SafeAreaView style={styles.container}
            horizontal={true}
        >
            <ScrollView style={styles.scroll}>
                <Text style={styles.mainText}>
                    Finalização da compra
                </Text>
                <View style={styles.detaisOrder}>

                    <View style={styles.description}>
                        <View style={styles.containerTextDescription}>
                            <Text style={styles.TextDescription}>
                                Descrição:
                            </Text>
                            <Text style={styles.TextList}> 2 kg de paẽs: R$ 3,00</Text>
                            <Text style={styles.TextList} > 1 Litro de leite: R$ 2,50</Text>
                        </View>
                    </View>
                    <View style={styles.account}>
                        <Text style={styles.textAcount}>
                            Total: R$ 5,50
                        </Text>
                    </View>

                </View>
                <View style={styles.statusOrder}>
                <Text style={styles.textOp}>Endereço de entrega :</Text>
                <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 300,border: '1px solid'}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Rua tal avenida aquela la" value="1" />
                <Picker.Item label="rua arizona avenida dos perdidos" value="2" />
                </Picker>

                <Text style={styles.textOp}>Método de pagamento :</Text>
                <Picker
                selectedValue={method}
                style={{ height: 50, width: 300,border: '1px solid', marginBottom:20}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label="Pagamento na hora da entrega" value="1" />
                </Picker>
                    <Button
                        mode="contained"
                        onPress={()=>finishBuyer()}
                    >
                        Realizar Pedido
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

     function finishBuyer(){
        navigation.navigate("OrderTracking")
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    mainText: {
        fontSize: 40,
        padding: 25,
        color: '#6054EC'
    },
    detaisOrder: {
        flexDirection: 'column',
        padding: 20
    },
    description: {
        margin: 8,
        borderWidth: 4,
        borderColor: '#C3CFD9',
    },
    containerTextDescription: {
        padding: 20
    },
    TextDescription: {
        fontSize: 17
    },
    TextList: {
        marginLeft: 10,
        marginTop: 8,
        fontSize: 15
    },
    account: {
        margin: 8,
        borderWidth: 4,
        borderColor: '#C3CFD9',
        padding: 20
    },
    textAcount: {
        fontSize: 17
    },
    statusOrder: {
        padding: 20
    },
    desfocedText: {
        marginLeft: "20%",
        fontSize: 20
    },
    selectStatus: {
        flexDirection: "row"
    },

    FocusText: {
        marginLeft: "12%",
        fontSize: 20,
        color: "#6558F5",
    },
    bar: {
        marginLeft: 18,
        height: 20,
        width: 6,
        backgroundColor: "#6558F5"
    },
    scroll: {
        flex: 1,
    },
    textOp:{
        fontSize:18,
        color: "#6558F5",
    }
})