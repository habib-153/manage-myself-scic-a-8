import { Link, useNavigate } from "react-router-dom";
import loginImg from '../assets/authentication.gif';
import { useContext, } from "react";
import { AuthContext } from "../Provider/AuthProvider.jsx";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Component/SocialLogin/SocialLogin.jsx";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(res =>{
          const user = res.user
          console.log(user)
          Swal.fire({
            title: "User Logged in successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate("/dashboard/tasks")
        })
    }
    
    return (
        <div className="hero min-h-screen ">
          <Helmet>
                <title>My Building | Login</title>
            </Helmet>
      <div className="hero-content flex-col md:flex-row lg:gap-12">
        <div className="">
          <img className="rounded-xl" src={loginImg} alt="" />
        </div>
        <div className="card w-[80%] shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center mt-4">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
            </div>
        <p>New here? Please <Link to='/register' className='text-[#ffc403] font-semibold'>Register</Link></p>
            <div className="form-control mt-6">
              <input className="btn hover:bg-[#8A4EC2] bg-[#8a4ec2b7] hover:text-white" type="submit" value="Login" />
            </div>
          </form>
          <div className="mx-auto">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;