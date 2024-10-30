//import React from 'react'
import {useForm} from 'react-hook-form' 

function Addproduct() {
  const{register, handleSubmit,reset,formState:{errors}}=useForm()
  const onSubmit = (data)=>{
    console.log(data)
  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type='text' id= 'productname' placeholder='produt name' 
                className={`form-control ${errors.productname ? "is-invalid":"" }`}
                {...register("productname",{required:"product name is required"})}
                />
    <input type='text' id= 'originalprice' placeholder='original price' 
                className={`form-control ${errors.originalprice ? "is-invalid":"" }`}
                {...register("originalprice",{required:"originalprice is required"})}
                />
    <input type='text' id= 'discount' placeholder='discount price' 
                className={`form-control ${errors.discount ? "is-invalid":"" }`}
                {...register("discount",)}
                />
    <input type='text' id= 'productdescription' placeholder='product description' 
                className={`form-control ${errors.productdescription ? "is-invalid":"" }`}
                {...register("productdescription",{required:"productdescription is required"})}
                />
    <input type='text' id= 'quantity' placeholder='product quantity' 
                className={`form-control ${errors.quantity ? "is-invalid":"" }`}
                {...register("quantity",{required:"quantity is required"})}
                />
    <input type='text' id= 'category' placeholder='product category' 
                className={`form-control ${errors.category ? "is-invalid":"" }`}
                {...register("category",{required:"category is required"})}
                />
    <input type='text' id= 'brand' placeholder='product brand' 
                className={`form-control ${errors.brand ? "is-invalid":"" }`}
                {...register("brand",{required:"brand is required"})}
                />
    <input type='text' id= 'rating' placeholder='product rating' 
                className={`form-control ${errors.rating ? "is-invalid":"" }`}
                {...register("rating",)}
                />
    <input type='text' id= 'image' placeholder='product image' 
                className={`form-control ${errors.image ? "is-invalid":"" }`}
                {...register("image",{required:"image is required"})}
                />
    </form>
      
    </div>
  )
}

export default Addproduct
