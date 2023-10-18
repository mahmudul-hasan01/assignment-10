import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "../../AuthProvider/AuthProvider";
import logo1 from  "../../../assets/istockphoto-532378051-170667a.webp"

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
        <div style={{backgroundImage:`url:(${logo1})`}} className="hero min-h-screen w-full">
           <div>
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
    );
};

export default Login;