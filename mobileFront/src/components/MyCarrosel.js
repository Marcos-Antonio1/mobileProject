import React from 'react';
import { View, Text ,Image, TouchableOpacity, Alert, Fragment} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel ,{ getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { Card} from 'react-native-paper';
import HortFruit from '../assets/hortFruit.jpg';
import Acouque from '../assets/açougue.png';
import Agua from '../assets/agua.jpg';
import Padaria from '../assets/padaria.jpg';

const entries = [
    {
         index: 0,
         title: 'HortFruit',
         source:Image.resolveAssetSource(HortFruit).uri,
         type:1
    },
    {
        index: 1,
        title: 'Açouque',
        source:Image.resolveAssetSource(Acouque).uri,
        type:2
    },
    {
        index: 2,
        title: 'Agua',
        source:Image.resolveAssetSource(Agua).uri,
        type:3
    },
    {
        index: 3,
        title: 'Padaria',
        source:Image.resolveAssetSource(Padaria).uri,
        type:4
    },
]

export const MyCarousel = () =>{
    
    const navigation = useNavigation();
    
     const scrollInterpolator = (index, carouselProps) => {
        const range = [3, 2, 1, 0, -1];
        const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
        const outputRange = range;
    
        return { inputRange, outputRange };
    }
    const animatedStyles = (index, animatedValue, carouselProps) => {
        const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
        const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    
        return {
            zIndex: carouselProps.data.length - index,
            opacity: animatedValue.interpolate({
                inputRange: [2, 3],
                outputRange: [1, 0],
                extrapolate: 'clamp'
            }),
            transform: [{
                rotate: animatedValue.interpolate({
                    inputRange: [-1, 0, 1, 2, 3],
                    outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
                    extrapolate: 'clamp'
                })
            }, {
                [translateProp]: animatedValue.interpolate({
                    inputRange: [-1, 0, 1, 2, 3],
                    outputRange: [
                        -sizeRef * 0.5,
                        0,
                        -sizeRef, // centered
                        -sizeRef * 2, // centered
                        -sizeRef * 3 // centered
                    ],
                    extrapolate: 'clamp'
                })
            }]
        };
    }
    const _renderItem = ({item, index}) => {
        return (
            <Card
            onPress={()=>goToserch(item.type)}
            >
                <Card.Cover source={{uri:item.source}} />
                <Card.Actions style ={{ alignItems:'center' }}>
                    <Text style ={{ fontSize:22}}>{item.title}</Text>
                </Card.Actions>
          </Card>
        );
    }
    function goToserch(type){
        console.log(navigation.navigate("ListEstabilish",{type}))
    }

    return (
        <Carousel
            layout="default"
            data={entries}
            renderItem={_renderItem}
            sliderWidth={6000}
            itemWidth={250} 
            scrollInterpolator={scrollInterpolator}
            slideInterpolatedStyle={animatedStyles}
            useScrollView={true}
        />       
    );
}