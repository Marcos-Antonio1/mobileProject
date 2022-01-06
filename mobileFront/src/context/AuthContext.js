import React,{createContext,useState} from "react";
import BuyerProvider from "../services/providers/BuyerProvider";

const AuthContext = createContext ();


function AuthProvider ({children}){
    const [authenticated,setAuthenticated] =useState(false)
    const [user,setUser]= useState()

    async function handlerLogin(dados){
        const result = await BuyerProvider.login(dados)
        setUser(result)
        return result;
    }

    function updateUser(dados){
          setUser(dados)
    } 

    return(    
       <AuthContext.Provider
           value ={{
            authenticated,
            handlerLogin,
            user,
            updateUser
        }}
       >
           {children}
       </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}; 
