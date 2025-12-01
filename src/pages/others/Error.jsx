import Header from "../../components/Header";
import ConnectionLost from "../../assets/connection_lost.svg";

const Error = () =>{
    return(
        <>
          <Header /> 

          <section  className="mt-28 font-Quicksand grid grid-cols-1 justify-items-center">
                <img src={ConnectionLost} alt="no internet" className="w-60" />
                <h1 className="uppercase font-bebas text-5xl text-center my-6">something went wrong!</h1>

                <div className="font-light text-sm text-center">
                    <p className="my-1">Sorry, It's not you. It's us.</p>
                    <p className="my-1">We're experiiencing internal server error.</p>
                    <p className="my-1">Please try again later.</p>
                </div>

                <div className="flex justify-center-safe mt-9">
                    <button className="bg-amber-500 px-10 py-3 rounded-3xl font-bold tracking-wide">Refresh</button>
                </div>

            </section>
          
        </>
    )
}

export default Error;