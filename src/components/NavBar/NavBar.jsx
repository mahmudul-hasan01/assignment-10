import { NavLink } from 'react-router-dom';
import carLogo from '../../assets/Car-Logo-PNG-HD-Isolated.png'
import { useContext } from 'react';
import { ContextData } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const { logOut, usars } = useContext(ContextData)
    const hendleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const link = <>
        <div className='text-xl'>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-xl text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2" : ""
                }
            >
                Home
            </NavLink>
        </div>
        <div className='text-xl'>
            <NavLink
                to="/AddProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-xl text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2" : ""
                }
            >
                Add Product
            </NavLink>
        </div>
        <div className='text-xl'>
            <NavLink
                to="/MyCart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-xl text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2" : ""
                }
            >
                My Cart
            </NavLink>
        </div>

    </>
    return (
        <div className='py-4'>
            <div className='flex justify-between max-w-screen-lg mx-auto items-center'>
                <div>
                    <img className='w-[200px]' src={carLogo} alt="" />
                    <p className='text-3xl text-center'>Car point</p>
                </div>
                <div className='flex gap-4 items-center'>
                    {link}
                </div>
                <div>

                    {
                        usars ?
                            <button onClick={hendleLogOut}>SignOut</button>
                            :
                            <div className='text-xl'>
                                <NavLink
                                    to="/Login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-xl text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;