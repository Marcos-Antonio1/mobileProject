import * as React from 'react';
import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,  } from 'react-native';
import * as Location from 'expo-location';



export default function Maps() {
    
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
      console.log(location)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
       
       initialRegion={{
        latitude: -6.123873186090209,
        longitude: -36.81348721589955,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}>
       <Marker coordinate={{
          latitude: -6.123273030048037,  
          longitude: -36.81370215642441
        }}
        image={ {uri:'https://t.ctcdn.com.br/SStLTVeh-Bt0xXYc0W7WSSFugZw=/100x100/smart/i489932.jpeg'}}
        > 
        <Text> Acouque </Text>
       </Marker>
      </MapView>
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
});