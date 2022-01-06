import  React from 'react'


export const AuthContext = React.createContext({})



export  const AuthProvider= (props) =>{
    return(
        <AuthContext.Provider value={result}>
            {props.children}
        </AuthContext.Provider>
    )
}