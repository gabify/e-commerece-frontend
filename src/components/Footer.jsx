const Footer =  () =>{
    return(
        <>
            <footer className="py-5 font-Quicksand border-t-2 border-t-gray-100">
                <section className="grid grid-cols-2 lg:grid-cols-4 p-5 place-items-center-safe">
                        <ul>
                            <li>
                                <h1 className="text-2xl font-bold font-bebas tracking-wide cursor-pointer mb-5">Block Market</h1>
                            </li>
                            <li className="text-gray-800 text-sm">
                                <p className="-mb-1">&copy; Block Market.</p>
                                <p>Design and developed by <a href="">Gabify</a></p>
                            </li>
                        </ul>
                        <article className="text-gray-800">
                            <h5 className="font-semibold">Shop Now</h5>
                            <ul className="text-sm font-light">
                                <li className="my-2">
                                    <a href="">New</a>
                                </li>
                                <li className="my-2">
                                    <a href="">All Products</a>
                                </li>
                                <li className="my-2">
                                    <a href="">Best Sellers</a>
                                </li>
                            </ul>
                        </article>
                </section>

                <section className="bg-amber-500 py-2 text-center font-extralight text-gray-800 cursor-default">
                    <small>Copyright &copy; 2025 Block Market Philippines. Allrights resevered <a href="" className="underline underline-offset-2">Terms of Use</a> | <a href="" className="underline underline-offset-2">Privacy Policy</a></small>
                </section>
            </footer>
        </>
    )
}

export default Footer;