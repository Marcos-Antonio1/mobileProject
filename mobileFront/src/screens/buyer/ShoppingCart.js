import React,{useEffect, useState}  from "react";
import { Text, View, StyleSheet, SafeAreaView,FlatList,Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';


export const ShoppingCart = ({route,navigation}) => {
    
    const {itensCart}= route.params;
    

    const [itens,setItens]=useState(itensCart);
    const [total,setTotal]= useState()

    useEffect(() => {
        calcTotal() 
    })

      async function calcTotal(){
        const valor = await itens.reduce(function(total,obj){
            return total + (obj.preco *obj.qtd_compra)
        },0)
        
        setTotal(valor)
       
    }

    function plus(product){
        let index = -1;
        itensCart.forEach(function(elem, i){
            if(elem.idProduto == product.idProduto){
               index = i;        
            }
       })
       
       let CopyState = itens
       CopyState[index].qtd_compra +=1;

       setItens(CopyState)

       console.log(itens)
    }

    function minus(product){
        if(product.qtd_compra == 1){
          setItens(itens.slice(itens.indexOf(product),1))
          console.log(itens)
        }else{
            let index = -1;
            itensCart.forEach(function(elem, i){
                if(elem.idProduto == product.idProduto){
                   index = i;        
                }
           })
           
           let CopyState = itens
           CopyState[index].qtd_compra -=1;

           setItens(CopyState)

        } 
    }

    const _render = ({item}) =>(
        <View style={styles.boxItem}>
                <View style={styles.lineOne}>
                    <View style={styles.titleArea}>
                        <View style={styles.containerImageProduto}>
                            <Image
                                source ={{uri:item.image}}
                                style={styles.imageProducts}
                            ></Image>
                        </View>
                        <Text style={styles.textTitlePrimary}>
                            {item.nome}
                        </Text>
                    </View>
                </View>
                <View style={styles.lineTwo}>
                        <TouchableOpacity
                            style={{marginRight: 12}}
                            onPress={()=>minus(item)}
                        >
                            <AntDesign name="minuscircleo" size={30} color="#6558F5" />
                        </TouchableOpacity>

                    <View style={styles.icons}>
                        <TouchableOpacity style={{marginLeft: 12}}
                         onPress={()=>plus(item)}
                        >
                            <AntDesign name="pluscircleo" size={30} color="#6558F5"/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.QtdValueContainer}>
                        <View>
                            <Text style={styles.TextoValue}> {item.qtd_compra}x </Text>
                        </View>
                        <View> 
                            <Text style={styles.TextoValue}> R$ {item.preco},00</Text>    
                        </View>
                    </View>

                </View>
            </View>
    );
    
    return (
        <View style={styles.container}>
            
            <SafeAreaView >
                <FlatList
                    data={itens}
                    renderItem={_render}
                    keyExtractor= {item =>item.id}
                />
            </SafeAreaView>
            
            <View sytle={styles.totalArea}>
                <Text style={styles.totalText}> Total R$ {total},00 </Text>
            </View>

            <Button
                mode="contained"
                style={{marginBottom:20}}
                onPress={()=>buy()}
            >Continuar a compra</Button>

        </View>
    );

    function buy(){
        navigation.navigate('ConfirmBuyer',{itens})
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
        fontSize:20,
        marginBottom:20,
        alignSelf:'flex-end',
    },
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