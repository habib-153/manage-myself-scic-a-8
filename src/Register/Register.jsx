import { Link, useNavigate } from "react-router-dom";
import loginImg from '../assets/authentication.gif';
import { useContext, } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Component/SocialLogin/SocialLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.photoURL[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
    
        const imageURL = res.data.data.display_url;
        console.log(imageURL);
        createUser(data.email, data.password).then((res) => {
          const user = res.user;
          console.log(user);
          updateUserProfile(data.name, imageURL).then(() => {
            // console.log("User Updated Successfully")
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/dashboard");
          });
        });
      };
    return (
        <div className="hero min-h-screen pt-12">
          <Helmet>
                <title>Manage Myself | Register</title>
            </Helmet>
      <div className="hero-content flex-col md:flex-row lg:gap-12">
        <div className="">
          <img className="rounded-xl" src={loginImg} alt="" />
        </div>
        <div className="card w-[80%] shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold text-center">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />{errors.name && <span>This field is required</span>}
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="file"
                placeholder="photoUrl"
                {...register("photoURL", { required: true })}
                className="input input-bordered pt-2"
              />{errors.photoURL && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />{errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true, 
                    minLength:6, 
                    maxLength:20,
                    pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                className="input input-bordered"
              />{errors.password?.type === 'required' && <span>This field is required</span>}
              {errors.password?.type === 'minLength' && <span>Password must be 6 character</span>}
              {errors.password?.type === 'maxLength' && <span>Password must be less than 20 character</span>}
              {errors.password?.type === 'pattern' && <span>Password must have one uppercase, one lowercase, one number and one special character</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
        <p>Already Registered? Please <Link to='/login' className='text-[#ffc403] font-semibold'>Login</Link></p>
            <div className="form-control mt-6">
              <input  className="btn bg-[#8a4ec2b7] hover:bg-[#8A4EC2] hover:text-white" type="submit" value="Register" />
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
    );
};
export default Register;