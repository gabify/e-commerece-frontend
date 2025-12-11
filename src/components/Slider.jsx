const Slider = ({children}) => {
    return(
        <article className="flex overflow-x-auto slider md:grid md:grid-cols-4 lg:grid-cols-5">
            {children}
        </article>
    )
}

export default Slider;