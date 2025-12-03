import { useState } from "react";

const Header = () =>{
    const [isShown, setIshown] = useState(false);

    return(
        <>
            <header className="shadow-lg shadow-gray-500/5 font-Quicksand">
                <section className="grid grid-cols-12 items-center-safe px-2">
                    <h1 className="col-span-5 md:col-span-2 lg:order-1 md:place-self-center-safe text-2xl font-bold font-bebas tracking-wide cursor-pointer max-lg:pt-2">Block Market</h1>
                    <form className="hidden sm:flex items-center-safe col-start-6 md:col-start-4 col-span-3 max-lg:col-span-4 lg:order-3 lg:col-start-9 my-2">
                        <input 
                            type="search" 
                            id="search-query" 
                            name="query" 
                            placeholder="What are you looking for...."
                            className="border-y-2 border-s-2 outline-0 rounded-s-md py-2 ps-2 flex-1 placeholder:text-gray-400 text-gray-900 text-sm"
                        />
                        <button type="submit" className="border-y-2 border-e-2 px-2 py-2 rounded-e-md block cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </form>

                    <div className="hidden lg:block relative lg:order-4 lg:place-self-center-safe cursor-pointer">
                        <span className="font-bold text-xs text-gray-800 bg-amber-400 px-1 py-0.5 rounded-full absolute -top-1 left-4">
                            99
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 text-gray-500">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                    </div>

                    <div className="col-span-1 col-start-13 cursor-pointer md:hidden" onClick={() => setIshown(!isShown)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <nav className={`max-md:col-span-12 ${isShown ? 'block' : 'hidden'} md:flex gap-0 md:col-start-9 lg:col-start-3 lg:col-span-3 lg:order-2 md:place-self-center-safe`}>
                        <a href="" className="flex items-center-safe text-sm py-2 px-2 -ms-1.5 text-gray-500 max-md:hover:text-gray-800 max-md:hover:bg-gray-50 max-md:hover:border-l-4 max-md:hover:border-amber-500 md:hover:border-t-4 md:hover:border-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:hidden">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <span className="ms-1 font-light">Home</span>
                        </a>

                        <a href="" className="flex items-center-safe text-sm py-2 px-2 -ms-1.5 text-gray-500 max-md:hover:text-gray-800 max-md:hover:bg-gray-50 max-md:hover:border-l-4 max-md:hover:border-amber-500 md:hover:border-t-4 md:hover:border-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:hidden">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                            </svg>
                            <span className="ms-1 font-light">Products</span>
                        </a>

                        <a href="" className="flex items-center-safe text-sm py-2 px-2 -ms-1.5 text-gray-500 max-md:hover:text-gray-800 max-md:hover:bg-gray-50 max-md:hover:border-l-4 max-md:hover:border-amber-500 md:hover:border-t-4 md:hover:border-amber-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:hidden">
                                <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
                            </svg>
                            <span className="ms-1 font-light">Categories</span>
                        </a>

                        <a href="" className="inline-flex items-center-safe text-sm py-2 -ms-1.5 ps-2 pe-4 text-gray-500 hover:text-gray-50 hover:bg-amber-500 hover:rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:hidden">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                            <span className="ms-1 font-light">Login</span>
                        </a>
                    </nav>
                </section>
            </header>
        </>
    )
}

export default Header;