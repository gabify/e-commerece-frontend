import Header from "../../components/Header";
import PageEaten from "../../assets/page_eaten.svg";

const NotFound = () =>{
    return(
        <>

            <Header />

            <section  className="p-10 font-Quicksand grid grid-cols-1 justify-items-center">
                <img 
                    src={PageEaten} 
                    alt="puppy eating paper" 
                    className="w-60"
                />
                <h1 className="uppercase font-bebas text-5xl text-center my-6">page not found</h1>

                <div className="font-light text-sm text-justify">
                    <p className="my-1">We looked everywhere for this page.</p>
                    <p className="my-1">Are you sure the website URL is correct?</p>
                    <p className="my-1">Get in touch with the site owner</p>
                </div>

               <div className="flex justify-center-safe mt-9">
                    <button className="bg-amber-500 px-10 py-3 rounded-3xl font-bold tracking-wide">Go Back</button>
               </div>

            </section>
        </>
    )
}

export default NotFound;