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
    const [showRetryPassword, setShowRetryPassword] = useState(false);

    return(
        <>
           <Header />
            <Main>
                <section className="p-3 my-3 mx-auto text-gray-800 lg:shadow-sm lg:rounded-2xl grid grid-cols-2 lg:w-8/12">
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
                    <article className="max-lg:bg-white max-lg:shadow-sm max-lg:rounded-2xl max-lg:pb-3 pt-10 px-5 min-w-64 sm:w-96 place-self-center-safe col-span-2 lg:col-span-1">
                        <div className="text-center mb-5">
                            <h1 className="font-bebas text-3xl">Create New Account!</h1>
                            <p className="font-light tracking-wide -mt-1">Please fill out the form carefully to create an account.</p>
                        </div>
                        <form className="mb-8">
                            <div className="grid grid-col-1 mb-3">
                                <label htmlFor="email" className="text-sm mb-1.5 text-gray-600 font-semibold">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="border-2 border-gray-400 rounded-md py-2 px-3 focus:border-2 outline-0 focus:border-amber-500 focus:shadow-2xs"
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
                                    className="border-2 border-gray-400 rounded-md py-2 px-3 outline-0 focus:border-amber-500 focus:shadow-2xs"
                                    placeholder="juan.delacruz@email.com"
                                    required
                                />
                            </div>

                            <div className="grid grid-col-1 mb-3">
                                <label htmlFor="password" className="text-sm mb-1.5 text-gray-600 font-semibold">Password</label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        name="password" 
                                        id="password" 
                                        className="border-2 border-gray-400 rounded-md py-2 px-3 w-full outline-0 focus:border-amber-500 focus:shadow-2xs"
                                        required
                                    />
                                    <div className="absolute bottom-3 right-2">
                                        <label htmlFor="showPassword" className="text-xs cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                name="showPassword" 
                                                id="showPassword" 
                                                onChange={()=> setShowPassword(!showPassword)} 
                                                className="appearance-none"
                                            />
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-amber-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-amber-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-col-1 mb-5">
                                <label htmlFor="retryPassword" className="text-sm mb-1.5 text-gray-600 font-semibold">Retry Password</label>
                                <div className="relative">
                                    <input 
                                        type={showRetryPassword ? 'text' : 'password'} 
                                        name="password" 
                                        id="retryPassword" 
                                        className="border-2 border-gray-400 rounded-md py-2 px-3 w-full outline-0 focus:border-amber-500 focus:shadow-2xs"
                                        required
                                    />
                                    <div className="absolute bottom-3 right-2">
                                        <label htmlFor="showRetryPassword" className="text-xs cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                name="showRetryPassword" 
                                                id="showRetryPassword" 
                                                onChange={()=> setShowRetryPassword(!showRetryPassword)} 
                                                className="appearance-none"
                                            />
                                            {showRetryPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-amber-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-amber-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            )}
                                        </label>
                                    </div>
                                </div>
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