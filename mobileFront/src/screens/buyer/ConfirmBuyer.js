import React,{useEffect,useContext} from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView,Picker,Alert,FlatList} from 'react-native';
import { Button } from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import BuyerProvider from '../../services/providers/BuyerProvider';



export const ConfirmBuyer = ({route,navigation}) => {
    
    const {itens} = route.params;
    const [selectedValue,setSelectedValue]=React.useState()
    const[method,setMethod] =React.useState()
    const [products,setProducts] = React.useState(itens)
    const [total,setTotal]= React.useState()
    const {user} =useContext(AuthContext)

    useEffect(() => {
        calcTotal()
         
    })
    
    async function calcTotal(){
        const valor = await itens.reduce(function(total,obj){
            return total + (obj.preco *obj.qtd_compra)
        },0)
        
        setTotal(valor)
       
    }
    const _render = ({item}) =>(
        <>
            <Text style={styles.TextList}> {item.nome}: R$ {item.preco},00  x{item.qtd_compra}</Text>
        </>
    )

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
                            <SafeAreaView >
                                <FlatList
                                    data={products}
                                    renderItem={_render}
                                    keyExtractor= {item =>item.id}
                                />
                            </SafeAreaView>
                        </View>
                    </View>
                    <View style={styles.account}>
                        <Text style={styles.textAcount}>
                            Total: R$ {total},00
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
                <Picker.Item label={`Rua ${user[1].rua},bairro ${user[1].bairro} n⁰ ${user[1].numero}` } value="1" />
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

     async function finishBuyer(){
         const dados = {
             total,
             itens : products
        }
          await BuyerProvider.order(dados)
         
          console.log(dados)
          Alert.alert("O pedido foi  realizado ")
         navigation.navigate("HomeBuyer")

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