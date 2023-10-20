import { NavLink } from 'react-router-dom';
import carLogo from '../../assets/Car-Logo-PNG-HD-Isolated.png'
import { useContext, useState } from 'react';
import { ContextData } from '../AuthProvider/AuthProvider';
import { HiMenuAlt1, HiX } from "react-icons/hi";

const NavBar = () => {
    const { logOut, users } = useContext(ContextData)
    const [open, setOpen] = useState(false)


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
                <div className='hidden lg:block'>
                    <img className='w-[200px]' src={carLogo} alt="" />
                    <p className='text-3xl text-center'>Car point</p>
                </div>

                <div className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
                    {
                        open ? <HiX></HiX> : <HiMenuAlt1></HiMenuAlt1>
                    }
                </div>
                <div className={`flex flex-col lg:flex-row bg-slate-100 lg:bg-transparent w-full lg:w-fit py-4 lg:py-0 rounded-lg gap-3 items-center duration-1000 absolute lg:static ${open ? "top-20 md:top-36" : "-top-96"}`}>
                   {link}
                </div>


                <div className='flex gap-2 items-center'>

                    {
                        users ?
                            <div><button className=' text-xl text-white rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2' onClick={hendleLogOut}>SignOut</button></div>
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
                    <div className="hidden md:block">
                        {
                            users ? <img className="rounded-full ml-3" src={users.photoURL} alt="" /> : <img className="rounded-full" src="../../assets/images.png" alt="" />
                        }
                        {
                            users && <h1>{users.displayName}</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;