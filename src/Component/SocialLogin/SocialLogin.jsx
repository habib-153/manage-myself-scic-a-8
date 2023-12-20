import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleLogin =()=>{
        signInWithGoogle()
        .then((res) => {
          console.log(res.user)
            Swal.fire({
                title: "User Logged in successful",
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
          navigate('/')
        })
      }
    return (
        <div className="mx-auto">
            <button onClick={handleGoogleLogin} className="hover:bg-[#269136]  btn btn-outline my-2">
              <FcGoogle className="text-xl"></FcGoogle>Continue with Google
            </button>
          </div>
    );
};

export default SocialLogin;