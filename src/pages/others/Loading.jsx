const Loading = () =>{
    return(
        <>
           <section className="inline-grid grid-cols-3 gap-1 py-10">
            <article className="col-start-2 col-span-1 place-self-center flex gap-2">
                <div className="dot"></div>
                <div className="dot middle-dot"></div>
                <div className="dot last-dot"></div>
            </article>
            <p className="text-center col-span-3 font-Quicksand text-gray-800 text-sm">Please wait a few momments...</p>
           </section>
        </>
    )
}

export default Loading;