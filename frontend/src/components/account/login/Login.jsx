//import React from 'react'
import {useForm} from 'react-hook-Form'
import axios from 'axios'
import { useAuth } from '../../../store/Auth'
function Login() {
    const{register, handleSubmit,reset,formState:{errors}}=useForm()
    const {setTokenInLocal} = useAuth()
    const onSubmit = (data)=>{
        axios.post("http://localhost:5125/users/loginUser",data,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        .then((res)=>{
          setTokenInLocal(res.data.token)
          console.log("user logined",res)
          alert("logined successful")
          reset()
        })
        .catch((error)=>{
          console.log(error)
          alert("logined failed")
        })
    }
  return (
       <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
            <div className="col-lg-6  col-sm-12 mx-auto border-rounded">
                <h2 className="text-center my-2">Login here</h2>
                <p className="text-center text-muted">Please enter your details</p>
                <form className='my-3' onSubmit={handleSubmit(onSubmit)}>
            
                <div className='mt-3'>

                <input type='text' id= 'email' placeholder='email' 
                className={`form-control ${errors.email ? "is-invalid":"" }`}
                {...register("email",{required:"email is required"})}
                />
                {
                    errors.email && <div className='text-danger invalid-feedback'>{errors.email.message}</div>
                }    
                </div>

                <div className='mt-3'>

                <input type='password' id= 'password' placeholder='password' 
                className={`form-control ${errors.password ? "is-invalid":"" }`}
                {...register("password",{required:"password is required"})}
                />
                {
                    errors.password && <div className='text-danger invalid-feedback'>{errors.password.message}</div>
                }    
                </div>
                <button type='submit' className='btn-primary rounded-full btn my-2 border-0 w-100 py-3'>Submit</button>
                </form>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
