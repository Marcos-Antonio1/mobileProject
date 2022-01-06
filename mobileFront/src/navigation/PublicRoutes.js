import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import  { Login }  from "../screens/Login";
import { Registration } from "../screens/Registration";
import { RegistrationEstablishment } from "../screens/RegistrationEstablishment";

const Stack = createStackNavigator();
 
export const PublicRoutes = () =>{
    return (
        <Stack.Navigator initialRouteName={Login} >
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
             name= "RegistrationEstablishment"
             component={RegistrationEstablishment}
             options={{title:"Cadastro"}}
            />            
        </Stack.Navigator>
    );
}
