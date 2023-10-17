import { NavLink } from 'react-router-dom';
import carLogo from '../../assets/Car-Logo-PNG-HD-Isolated.png'

const NavBar = () => {

    const link = <>
        <div>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </div>
        <div>
            <NavLink
                to="/AddProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
               Add Product
            </NavLink>
        </div>
        <div>
            <NavLink
                to="/MyCart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                My Cart
            </NavLink>
        </div>
        
    </>
    return (
        <div className='bg-slate-300 py-4'>
            <div className='flex justify-between max-w-screen-lg mx-auto items-center'>
                <div>
                    <img className='w-[200px]' src={carLogo} alt="" />
                    <p className='text-3xl text-center'>Car point</p>
                </div>
                <div className='flex gap-4 items-center'>
                    {link}
                </div>
                <div>
                    <NavLink
                        to="/Login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;