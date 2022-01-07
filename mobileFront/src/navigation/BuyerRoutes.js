import React  from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeBuyer } from '../screens/buyer/HomeBuyer';
import { OrdemTracking} from '../screens/buyer/OrderTracking';
import { ProductBuyer} from '../screens/buyer/ProductBuy';
import {SeachProducts} from '../screens/buyer/SearchProducts'; 
import { ShoppingCart } from '../screens/buyer/ShoppingCart';
import { ListEstabilish } from "../screens/buyer/ListEstabilish";
import { Estabilish } from "../screens/buyer/Estabilish";
import { ProductDescription } from "../screens/buyer/ProductDescription";
import { ResultSearch } from "../screens/buyer/ResultSearch";
import { ConfirmBuyer } from "../screens/buyer/ConfirmBuyer";
import { EditData } from "../screens/buyer/EditData";
import { Login } from "../screens/Login";
import { Registration } from "../screens/Registration";
import { OrdemTrackingFinish } from "../screens/buyer/OrdemTrackingFinish";
import { OrdenOpenList } from "../screens/buyer/OrdenOpenList";
import Maps from "../screens/buyer/Maps";
 
const Stack = createStackNavigator();
export const BuyerRoutes = () => {
    
    return (

        <Stack.Navigator initialRouteName="Login">
            
            <Stack.Screen
             name= "Login"
             component={Login}
             options ={
                {headerShown:false}
             }
            />
            <Stack.Screen
             name= "Registration"
             component={Registration}
             options={{title:"Cadastro"}}
            />             

            <Stack.Screen
            name="HomeBuyer"
            component={HomeBuyer}
            options ={
                {headerShown:false}
             }
            />

            <Stack.Screen
            name="OrderTracking"
            component={ OrdemTracking }
            />

            <Stack.Screen
            name="ProductBuyer"
            component={ ProductBuyer}
            />

            <Stack.Screen
            name="SearchProducts"
            component={ SeachProducts }
            />

            <Stack.Screen
            name="ShoppingCart"
            component={ ShoppingCart }
            /> 

            <Stack.Screen
            name="ListEstabilish"
            component={ ListEstabilish }
            />

            <Stack.Screen
            name="Estabilish"
            component={Estabilish}
            />

            <Stack.Screen 
            name="ProductDescription"
            component={ ProductDescription}
            />
            <Stack.Screen
            name="ResultSearch"
            component={ ResultSearch }
            />

            <Stack.Screen 
                name="ConfirmBuyer"
                component={ ConfirmBuyer }
            />

            <Stack.Screen 
                name="EditData"
                component={ EditData }
            />

            <Stack.Screen
              name="OrdemTrackingFinish"
              component={ OrdemTrackingFinish }
            />

            <Stack.Screen
            name="OrdenOpenList"
            component={ OrdenOpenList }
            />

            <Stack.Screen
            name="Maps"
            component={ Maps }
            />

        </Stack.Navigator>
    );
}