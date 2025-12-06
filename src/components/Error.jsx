const Error = ({message}) =>{
    return(
        <>
            <div className="my-5 text-red-500 font-bold text-center text-sm">
                <span>{message}</span>
            </div>
        </>
    )
}

export default Error;