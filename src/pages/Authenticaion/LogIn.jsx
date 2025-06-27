import React from 'react';
import authImage from '../../assets/authImage.png';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
const LogIn = () => {
const {register, handleSubmit, 
    formState: { errors },} = useForm();
const onSubmit = data =>{
    console.log(data);
}

    return (
      <div className='flex justify-center items-center'>
         <div className=' w-3/12'>
       <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email')} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register('password', 
          {required:true,
           minLength:6
          })}
           className="input" placeholder="Password" />
          {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
          {
            errors.password?.type==='minLength' && <p className='text-red-600'> password must be 6 character</p>
          }

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

       </form>
           <p>Already have an account please<Link to='/login' className='tex-primary btn btn-link'> login</Link ></p>
           <SocialLogin></SocialLogin>
        </div>
 
                <div>
<img src={authImage} alt="" />
        </div>
      </div>
    );
};

export default LogIn;