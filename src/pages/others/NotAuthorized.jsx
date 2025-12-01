import Header from "../../components/Header";
import AccessDenied from "../../assets/access_denied.svg";

const NotAuthorized = () =>{
    return(
        <>
          <Header />

        <section  className="p-10 font-Quicksand grid grid-cols-1 justify-items-center">
            <img 
                src={AccessDenied} 
                alt="puppy eating paper" 
                className="w-60"
            />
            <h1 className="uppercase font-bebas text-5xl text-center my-6">access denied!</h1>

            <div className="font-light text-sm text-center">
                <p className="my-1">We're sorry but you do not have the required permission this page.</p>
                <p className="my-1">Please contact the site owner.</p>
            </div>

            <div className="flex justify-center-safe mt-9">
                <button className="bg-amber-500 px-10 py-3 rounded-3xl font-bold tracking-wide">Go Back</button>
            </div>

        </section> 
        </>
    )
}

export default NotAuthorized;