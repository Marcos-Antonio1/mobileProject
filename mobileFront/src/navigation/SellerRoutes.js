import React  from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {HomeSeller} from '../screens/seller/HomeSeller';
import { MyProducts } from '../screens/seller/MyProducts';
import { EditProduct } from "../screens/seller/EditProduct";
import { RegistrationProduct} from "../screens/seller/RegistrationProduct";
import { UpdateOrder } from "../screens/seller/UpdateOrder";
import { RegisterProduct } from "../screens/seller/RegisterProduct";
import { ListOrder } from "../screens/seller/ListOrder";
import { OrdemTrackingEsta } from "../screens/seller/OrderTrackingEsta";



const Stack = createStackNavigator();
export const SellerRoutes = () => {
    
    return (
        <Stack.Navigator initialRouteName="HomeSeller">
            <Stack.Screen
            name="HomeSeller"
            component={HomeSeller}
            options ={
                {headerShown:false}
             }
            />
            <Stack.Screen
            name="MyProducts"
            component={ MyProducts }
            />
            <Stack.Screen
            name="EditProduct"
            component={ EditProduct }
            />
            <Stack.Screen
            name="RegistrationProduct"
            component={ RegistrationProduct }
            />
            <Stack.Screen
            name="UpdateOrder"
            component={ UpdateOrder}/>

            <Stack.Screen
            name="RegisterProduct"
            component={ RegisterProduct}/>

            <Stack.Screen 
            name ="ListOrder"
            component={ListOrder }
            />
            
            <Stack.Screen 
            name="OrdemTrackingEsta"
            component={OrdemTrackingEsta}
            />

        </Stack.Navigator>
    );
}