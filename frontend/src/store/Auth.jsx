import { createContext,useContext,useEffect,useState } from "react";
export const AuthContext = createContext()
export const AuthProvider =  ({children})=>{
    const [token,settoken] = useState(localStorage.getItem("token")||"")
    const [user,setUser] = useState(null)
    const [cart,setCart] =useState(()=>JSON.parse(localStorage.getItem("cart"))||[])
    //setting cart in local storage
    const updateCartInLocalStorage = (updatedCart)=>{
        try {
            localStorage.setItem("cart",JSON.stringify(updatedCart))
            setCart(updatedCart)

        } catch (error) {
            console.log(error,"failed to updated cart")
        }
    }
    //add item to cart
    const addToCart = (cartItem) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        
        // Check if the item already exists in the cart
        const itemExist = existingCart.some((item) => item._id === cartItem._id);
        if (itemExist) {
            alert("Item is already in the cart");
        } else {
            // Add the new item to the cart
            const updatedCart = [...existingCart, cartItem];
            updateCartInLocalStorage(updatedCart);
    
            alert("1 item added to cart");
    
            // Log the updated cart or cartItem for debugging
            console.log(cartItem, "Added cart item");
            console.log(updatedCart, "Updated cart");
        }
    };
    
    const setTokenInLocal = (serverToken)=>{
        localStorage.setItem('token',serverToken)
    settoken(serverToken)}
    const isLoggedIn = !!token
    //logout user
    const logoutUser = ()=>{
        localStorage.removeItem("token")
        settoken("")
        setUser("")
    }
    //getting user information
useEffect(() => {
  if (token) {
    userAuthetication()
  } else {
    setUser(null)
  }
}, [token])
const userAuthetication = async () => {
    try {
        const response = await fetch('http://localhost:5125/users/user',{
            method:'GET',
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if (!response.ok) {
            throw new Error("failed to autheticate user")
        }
        const userData = await response.json()
        console.log(userData,'current user data')
        setUser(userData)
    } catch (error) {
        console.log(error,'error in fetching user data')
        setUser(null)
    }
}
return (
    <AuthContext.Provider value={{setTokenInLocal,isLoggedIn,user,logoutUser,addToCart}}>
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