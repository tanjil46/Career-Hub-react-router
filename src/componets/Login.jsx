import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider";


const Login = () => {
 const navigate=useNavigate()
 const location=useLocation()
 console.log(location)
const emailHook=useRef()



const{userSingIn,resetEmail}=useContext(AuthContext)







const loginHandler=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    userSingIn(email,password)
    .then((result)=>{
        console.log(result.user)
        navigate(location?.state?location.state :'/')
    })
    .catch(error=>console.log(error.message))
};

const resetHandler=()=>{

 const email=emailHook.current.value
 console.log(email)
 resetEmail(email)
 .then(()=>{
    alert('Email sent succesfully')
    

 })
 .catch(error=>console.log(error))


}
 










    return (
        <div>
         
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">
       
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div className="">
        <p className="text-center">Login Now</p>
       </div>
      <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailHook} type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={resetHandler} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="">new here!<Link className="btn"  to='/resis'>Resister</Link></p>
      </form>
    </div>
  </div>
</div>



        </div>
    );
};

export default Login;