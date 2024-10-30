import { createContext,useContext,useState } from "react";
export const AuthContext = createContext()
export const AuthProvider =  ({children})=>{
    const [token,settoken] = useState(localStorage.getItem("token")||"")
    const setTokenInLocal = (serverToken)=>{
        localStorage.setItem('token',serverToken)
    settoken(serverToken)}
    const isLoggedIn = !!token
return (
    <AuthContext.Provider value={{setTokenInLocal,isLoggedIn}}>
        {children}
    </AuthContext.Provider>
)
}
//custom hook created
export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("wrap app by auth provider")
    }
    return context
}