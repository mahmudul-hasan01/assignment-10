import { useContext, useState } from "react";
import { ContextData } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
    const { register,googleLogin } = useContext(ContextData)
    const [show, setShow] = useState(false)
    const hendleRegister =(e)=>{
        e.preventDefault()
        const form =e.target
        const email =form.email.value
        const password =form.password.value
        register(email,password)
        .then(() => {
            return Swal.fire(
                'Good!',
                'Successfully Register.',
                'success'
              )
         })
        .catch(() => {
        })
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            return Swal.fire(
                'ERROR!',
                'Something is wrong.',
                'error'
              )
          }
    }
    const hendleGoogleLogin =()=>{
        googleLogin()
        .then()
        .catch()
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1> 
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered relative" required />
                        <span className="absolute right-10 bottom-[220px] text-2xl" onClick={() => setShow(!show)}>{show ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}</span>
                            <p className="mt-4">please <Link className="text-blue-600 underline" to='/login'>Login</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <button className="btn btn-outline text-xl mt-2" onClick={hendleGoogleLogin}><FcGoogle></FcGoogle> Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;