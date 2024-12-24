import {useEffect} from 'react'
import { useAuth } from '../../../store/Auth'
import { Navigate } from 'react-router-dom'

function Logout() {
    const {logoutUser} = useAuth()
    useEffect(()=>{
        logoutUser()
    },[logoutUser])
  return <Navigate to = "/auth/login" />
}

export default Logout
