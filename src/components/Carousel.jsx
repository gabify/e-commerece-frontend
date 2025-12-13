import { useEffect, useState } from "react";


const Carousel = ({
    children,
    autoSlide = false,
    autoSlideInterval = 3000
}) =>{
    const [current , setCurrent] = useState(0);

    const prev = () => setCurrent((current) => (current === 0 ? children.length - 1 : current - 1));
    const next = () => setCurrent((current) => (current === children.length - 1 ? 0 : current + 1));

    useEffect(() =>{
        if(!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])

    return(
        <article className="m-2 rounded-md overflow-hidden relative snap-x snap-mandatory lg:w-4xl xl:w-5xl">
            <div className="flex w-screen sm:h-54 md:h-72 lg:h-96 transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-3">
                <button onClick={prev} className="text-gray-300 hover:text-gray-50 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={next} className="text-gray-300 hover:text-gray-50 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex items-center justify-center gap-1">
                    {children.map((s, index) =>(
                        <div key={index} className={`transition-all w-1.5 h-1.5 bg-amber-300 rounded-full ${current === index ? 'p-1.5 bg-amber-500' : ''}`}/>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default Carousel;