import { useState } from "react";   
import { Link } from "react-router-dom"

import EscapeHtml from "../../utils/EscapeHtml.jsx";
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Main from "../../components/Main.jsx";
import Error from "../../components/Error.jsx";
import Welcome from "../../assets/welcome_img.svg";

const Register = () =>{
    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
           <Header />
            <Main>
                <section className="p-3 mx-auto text-gray-800 lg:shadow-sm lg:rounded-2xl grid grid-cols-2 lg:w-6/12">
                    <article className="hidden lg:grid grid-cols-1 px-2 items-baseline-last justify-center-safe bg-white rounded-xl col-span-1">
                        <div className="font-bebas ">
                            <div className="flex gap-0.5 justify-center-safe items-center-safe">
                                <div className="text-xl">
                                    <p className="text-amber-500">Discover</p>
                                    <p>and</p>
                                    <p className="text-amber-500">Manage</p>
                                </div>
                                <p className="text-9xl">Shop</p>
                            </div>
                            <p className="-mt-3 text-center text-lg tracking-wide bg-amber-500">Your store with ease</p>
                        </div>
                        <img src={Welcome} alt="Welcome Image" className="w-96"/>
                    </article>
                    <article className="max-lg:bg-white max-lg:shadow-sm max-lg:rounded-2xl pb-5 pt-10 px-5 min-w-64 sm:w-96 lg:w-72 place-self-center-safe col-span-2 lg:col-span-1">
                        <div className="text-center mb-5">
                            <h1 className="font-bebas text-3xl">Create New Account!</h1>
                            <p className="font-light tracking-wide -mt-1">Please fill out the form carefully to create an account.</p>
                        </div>
                        <form className="mb-5">
                            <div className="grid grid-col-1 mb-3">
                                <label htmlFor="email" className="text-sm mb-1.5 text-gray-600 font-semibold">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="border-2 border-gray-400 rounded-md py-2 px-3"
                                    placeholder="Juan D. La Cruz"
                                    required
                                />
                            </div>
                            <div className="grid grid-col-1 mb-3">
                                <label htmlFor="email" className="text-sm mb-1.5 text-gray-600 font-semibold">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="border-2 border-gray-400 rounded-md py-2 px-3"
                                    placeholder="juan.delacruz@email.com"
                                    required
                                />
                            </div>

                            <div className="grid grid-col-1 mb-3">
                                <label htmlFor="password" className="text-sm mb-1.5 text-gray-600 font-semibold">Password</label>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    name="password" 
                                    id="password" 
                                    className="border-2 border-gray-400 rounded-md py-2 px-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-col-1 mb-3">
                                <label htmlFor="password" className="text-sm mb-1.5 text-gray-600 font-semibold">Retry Password</label>
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    name="tryPassword" 
                                    id="tryPassword" 
                                    className="border-2 border-gray-400 rounded-md py-2 px-3"
                                    required
                                />
                            </div>

                            <div className="flex justify-between mb-5">
                               <div className="flex items-center-safe gap-0.5">
                                 <input type="checkbox" name="showPassword" id="showPassword" onChange={()=> setShowPassword(!showPassword)}/>
                                 <small className="text-xs">Show Password</small>
                               </div>

                               <a href="http://" className="text-xs text-amber-500 hover:underline underline-offset-2">Forgot Password?</a>
                            </div>
                            
                            <div className="grid grid-cols-1">
                                <button type="submit" className={`py-3 rounded-xl text-gray-50 font-black text-lg cursor-pointer bg-amber-500 hover:bg-amber-400`}>
                                    Register
                                </button>
                            </div>
                        </form>

                        <small>You already have an account? Log in <Link to={'/login'} className="text-amber-500 hover:underline">here</Link></small>
                    </article>
                    
                </section>
            </Main>
           <Footer />
        </>
    )
}

export default Register;