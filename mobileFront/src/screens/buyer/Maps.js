import * as React from 'react';
import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, Image  } from 'react-native';
import * as Location from 'expo-location';
import BuyerProvider from '../../services/providers/BuyerProvider';

export default function Maps() {
    
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [loading,setLoading]= React.useState(true);
  const [points,setPoints] = React.useState();

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let points = await BuyerProvider.nextEstabilish()
      let location = await Location.getCurrentPositionAsync({});
      setPoints(points)
      setLocation(location.coords);    
      setLoading(false);    
    })();
  }, []);
  
  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#00ff00" />
      :<MapView style={styles.map}
       
       initialRegion={{
        latitude:location.latitude ,
        longitude: location.longitude ,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,

      }}>
        <Marker 
           coordinate={{
             latitude:location.latitude,
             longitude:location.longitude
            }}
            title={'Minha localização'}
          > 
         </Marker>

       {points.map((item,index) => (
          <Marker 
           key={index}
           coordinate={{
             latitude:item.latitude,
             longitude:item.longitude
            }}
            title={item.nome}
            description={item.descricao}
          > 
         </Marker>
       ))}
      </MapView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  icon:{
    width: 50,
    height: 50,
  }
});