import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {login}=useContext(ContextData)
    const hendleLogin = (e)=>{
        e.preventDefault()
        const form =e.target
        const email =form.email.value
        const password =form.password.value
        login(email,password)
        .then(data => {
            console.log(data.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
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
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <p>please <Link to='/Register'>Register</Link></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;