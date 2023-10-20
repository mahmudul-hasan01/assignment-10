import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../AuthProvider/AuthProvider";
import logo1 from "../../../assets/istockphoto-532378051-170667a.webp"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
    const { login,googleLogin } = useContext(ContextData)
    const [show, setShow] = useState(false)
    const hendleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then(data => {
                console.log(data.user)
            })
            .catch(() => {
                return Swal.fire(
                    'ERROR!',
                    'Something is wrong.',
                    'error'
                  )
            })
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
                <h1 className="text-5xl font-bold">Login now!</h1> 
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={hendleLogin} className="card-body">
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
                        <p className="mt-4">please <Link className="text-blue-600 underline" to='/Register'>Register</Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-outline text-xl mt-2" onClick={hendleGoogleLogin}><FcGoogle></FcGoogle> Google</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;