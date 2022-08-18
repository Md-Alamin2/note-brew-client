import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import gLogo from "../../../../images/icon/google.svg";
const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate =  useNavigate()
  const onSubmit = async (data) =>{
    const url = `http://127.0.0.1:5000/auth/sign-up`
    const payload =  JSON.stringify(data);
    const response = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:payload
    })
    if(response.status == 200){
      data = await response.json()
      navigate('/')

    }
    console.log(data)
  };

  return (
    
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className=" text-4xl font-bold text-center  text-primary">Note brew</h2>
          <h2 className=" text-3xl font-bold text-center my-5">Sign up</h2>
           {/* ------------name field start--------------- */}
           <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name",{
              required:{
                  value: true,
                  message: "Name is required*"
              },
            })}
          />
          <label className="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span> }
          </label>
          

           {/* ------------name field end--------------- */}

          {/* ------------email field start--------------- */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered my-2 w-full max-w-xs"
            {...register("email",{
              required:{
                  value: true,
                  message: "email is required*"
              },
              pattern: {
                value:  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: 'Provide a valid email.' 
              }
            })}
          />
          <label className="label">
          {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
          {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
          </label>
          {/* ----------------email field end--------------------- */}


           {/* ------------password field start--------------- */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered  w-full max-w-xs"
            {...register("password",  {
              required:{
                  value:true,
                  message: "Password is required*"
              },
              minLength: {
                value: 6,
                message: 'Password must be 6 character.' 
              }
            })}
          />
          <label className="label">
          {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
          {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
          </label>
           {/* ------------password field end--------------- */}
          <p>Already have a account? <Link to="/signIn"><span className="text-primary">Please Sign In</span></Link>  </p>
          {/* --------------------signUp button start------------------- */}
          <button type="submit" className="btn btn-primary mt-2 hover:bg-secondary  w-full max-w-xs  text-white">Sign Up</button>
          {/* --------------------signUp button start------------------- */}
          </form>
          <div className="divider">OR</div>
           {/* --------------------google signUp button start------------------- */}
          <button className="btn btn-outline"> <img src={gLogo} className="w-6 mx-2" alt="G"/> <span>Google SignIn</span></button>
             {/* --------------------google signUp button end------------------- */}
        </div>
      </div>
    </div>
   

  

    
    
  );
};

export default SignUp;
