import React,{useEffect}  from "react";
import { Text, View , StyleSheet,ScrollView ,SafeAreaView,FlatList,Alert} from 'react-native';
import { Button } from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist'
import BuyerProvider from '../../services/providers/BuyerProvider';

export const OrdemTracking = ({route,navigation}) => {
    
    const [order,setOrder] = React.useState(route.params);
    
    useEffect(() => {
        console.log(order)
    }, [])

    const _render = ({item}) =>(
        <>
          <Text style={styles.TextList}> {item.qtd_compra} x  {item.nome}: R$ {item.preco},00</Text>
        </>
    );
    return (
        <SafeAreaView style={styles.container}
            horizontal={true} 
        >
            <ScrollView style={styles.scroll}>
                <Text style={styles.mainText}>
                    Pedido {order.id}:
                </Text>
                <View style={styles.detaisOrder}>

                    <View style={styles.description}>
                        <View style={styles.containerTextDescription}>
                            <Text style={styles.TextDescription}>
                                Descrição:
                            </Text>
                            <SafeAreaView >
                               <FlatList
                                data={order.itens}
                                renderItem={_render}
                                keyExtractor= {item =>item.id}
                            />
                            </SafeAreaView>
                            </View>
                    </View>
                    <View style={styles.account}>
                        <Text style={styles.textAcount}>
                            Total: R$ {order.total},00
                        </Text>
                    </View>

                </View>
                <View style={styles.statusOrder}>
                <Timeline
                    data={order.tracking}
                />
                <Button
                    onPress={() => ReceivedAlert()}
                    mode ="contained"
                >
                    Confirmar Entrega
                </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

    function ReceivedAlert(){
        Alert.alert(
            "Você está confirmando a entrega.",
            "Tem certeza disso",
            [
              // The "Yes" button
              {
                text: "Sim",
                onPress: () => {
                  Received()
                },
              },
              // The "No" button
              // Does nothing but dismiss the dialog when tapped
              {
                text: "Não",
              },
            ]
          );
    }
    function Received(){
        const dados = {
            id:order.id,
        }
        const confirm= BuyerProvider.confirmReceived(dados)
        navigation.navigate("HomeBuyer")
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },
    mainText:{
        fontSize:40,
        padding:25,
        color:'#6054EC'
    },
    detaisOrder:{
        flexDirection:'column',
        padding:20
    },
    description :{
        margin:8,
        borderWidth:4,
        borderColor:'#C3CFD9',
    },
    containerTextDescription:{
        padding:20        
    },
    TextDescription:{
        fontSize:17
    },
    TextList:{
        marginLeft:10,
        marginTop:8,
        fontSize:15      
    },
    account:{
        margin:8,
        borderWidth:4,
        borderColor:'#C3CFD9',
        padding:20
    },
    textAcount:{
        fontSize:17
    },  
    statusOrder:{
        padding:20
    },
    desfocedText: {
        marginLeft:"20%",
        fontSize:20
    },
    selectStatus:{
        flexDirection:"row"
    },

    FocusText:{
        marginLeft:"12%",
        fontSize:20,
        color:"#6558F5",
    },
    bar:{
        marginLeft:18,
        height:20,
        width:6,
        backgroundColor:"#6558F5"
    },
    scroll:{
        flex:1,
    }
})