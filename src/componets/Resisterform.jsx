import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";


const Resisterform = () => {

 const{createUser}=useContext(AuthContext)
 const[Errors,setErrors]=useState('')
const navigate=useNavigate()




 const resisterHandler=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
      

    if(password.length<6){

       return setErrors('PASSWORD MUST BE SIX OR ABOVE CHARECTERS')
    }
    else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
          return   setErrors('Your password must be Minimum eight characters, at least one letter and one number')
    }











    createUser(email,password)
    .then((result)=>{
        console.log(result.user)
        navigate('/')
        alert('Succefully Resisterd')
        return
       
    })
    .catch(error=>console.log(error.message))

 }











    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <form onSubmit={resisterHandler} className="card-body">
     
        <div className="form-control">

        <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type='text' placeholder="name" name="name"  className="input input-bordered" />

          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photo url" name="photo"  className="input input-bordered"  />






          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex">
          <input
          
          type='password'     placeholder="password" name="password" className="input input-bordered" required />
         
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
        </div>

           {
            Errors && <p className="text-black">{Errors}</p>
           }

           <p className="">Already Resistered!<Link className="text-white text-xl" to='/login'>Login </Link> </p>
      </form>
   
    </div>
    </div>
</div>
            
        </div>
    );
};

export default Resisterform;