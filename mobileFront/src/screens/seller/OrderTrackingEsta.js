import React  from "react";
import { Text, View , StyleSheet,ScrollView ,SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import Timeline from 'react-native-timeline-flatlist'


export const OrdemTrackingEsta = () => {
    
    const [dataTrackingOrder,setDataTrackingOrder]= React.useState([
        {time: '09:00', title: 'Pedido finalizado',circleSize:16, description:"Pedido finalizado aguarde a separação do estoque",lineWidth:8},
    ])

    return (
        <SafeAreaView style={styles.container}
            horizontal={true} 
        >
            <ScrollView style={styles.scroll}>
                <Text style={styles.mainText}>
                    Pedido 01232:
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
                <Timeline
                    data={dataTrackingOrder}
                />
                <View style={styles.buttons}>
                    <Button mode ="contained" style={styles.bt}>Produto separado</Button>
                    <Button mode ="contained" style={styles.bt}> Saiu para entrega</Button>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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
    },
    bt:{
      margin:10  
    }
})