import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Main from "../../components/Main.jsx";
import Carousel from "../../components/Carousel.jsx";
import Slider from "../../components/Slider.jsx";

import Hero4 from "../../assets/bg-carousel-4.jpg"
import { use } from "react";

const categories = [
    "BLocks & Building Materials",
    "Tools & Weapons",
    "Armor & Wearables",
    "Food & Farming",
    "Redstone & Electronics",
    "Mobs & Pets",
    "Enchantments & Potions",
    "Decorations & Furniture",
    "Adventure & Rare Items",
    "Economy & Special Bundles"
]

    const carousel1 = () =>{
        return(
            <div className='bg-hero-1 bg-center bg-cover w-screen max-h-screen min-w-full snap-center shrink-0 p-5'>
                <h1 className="px-2 py-1 bg-amber-400 inline font-bebas text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-50">Craft your world.</h1>
                <h2 className="text-gray-50 text-4xl sm:text-6xl md:text-7xl lg:text-8xl -mb-1 mt-4 md:mt-10 lg:mt-20">Build with Style.</h2>
                <p className="text-sm sm:text-md md:text-lg lg:tracking-tight text-gray-300">Everything you need to craft your next adventure.</p>
            </div>
        )
    }

    const carousel2 = () =>{
        return(
            <div className='bg-hero-2 bg-cover bg-center w-screen min-w-full shrink-0 p-5'>
                <h2 className="text-gray-50 text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:-mb-2 -mb-1 mt-4 font-bebas">Gear Up for Your Next Quest.</h2>
                <p className="text-xs sm:text-md md:text-lg font-light text-gray-300 mb-2">Explore confidently with premium Minecraft gear.</p>
                <button className="bg-amber-400 px-1.5 sm:px-3 sm:py-1 rounded-sm text-gray-50 font-bebas cursor-pointer hover:text-gray-300 sm:text-2xl">
                    Shop Now!
                </button>
            </div>
        )
    }

    const carousel3 = () =>{
        return(
            <div className='bg-hero-3 bg-cover bg-center w-screen snap-center shrink-0 px-4'>
                <h2 className="text-gray-50 text-xl sm:text-4xl md:text-5xl lg:text-6xl -mb-1 mt-4 font-bebas">Rare Finds for True Builders.</h2>
                <p className="text-xs sm:text-md md:text-lg lg:tracking-tight font-light text-gray-300 mb-10">Discover exclusive blocks, skins, and collectibles.</p>
            </div>
        )
    }

    const carousel4 = () =>{
        return(
            <div className='bg-hero-4 bg-cover bg-center w-screen snap-center shrink-0 px-4'>
                <div className="max-lg:flex max-lg:flex-col items-center w-screen justify-center mb-10 sm:mb-20 md:mb-30 lg:mt-10 lg:mb-40">
                    <h2 className="text-gray-50 text-3xl sm:text-5xl md:text-6xl -mb-1 mt-4 font-bebas tracking-wide">Fast Delivery</h2>
                    <h2 className="bg-amber-500/75 text-white px-3 inline-block text-shadow-md text-xl md:text-2xl font-bebas text-center">No Redstone Required.</h2>
                </div>
                <p className="text-xs sm:text-md md:text-lg md:tracking-tight font-light max-lg:text-center text-gray-50">Your favorite Minecraft items delivered like magic.</p>
            </div>
        )
    }

    const carousel5 = () =>{
        return(
            <div className='bg-hero-5 bg-cover bg-center w-screen snap-center shrink-0 px-4 lg:flex lg:flex-col justify-end'>
                <h2 className="text-gray-50 text-center text-xl sm:text-4xl md:text-5xl -mb-1.5 mt-4 font-bebas lg:text-left"><span className="text-amber-300">Build.</span> Trade. <span className="text-amber-300">Play.</span> Repeat.</h2>
                <p className="text-xs sm:text-md md:text-lg md:tracking-tight lg:text-left font-light text-center text-gray-50 mb-10">Join thousands of crafters leveling up their world.</p>
            </div>
        )
    }

const slides = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5
];

const fetchCategories = async () =>{
    const response = await fetch(`${import.meta.env.VITE_API}category/all`);
    const data = await response.json();

    return data.message;
}

const fetchProducts = async () =>{
    const response = await fetch(`${import.meta.env.VITE_API}product/all`);
    const data = await response.json();

    return data.message[0];
}

const categoryPromise = fetchCategories();
const productPromise = fetchProducts();

const Home = () =>{
    const categories = use(categoryPromise);
    const products = use(productPromise);

    return(
        <>
        <Header />
            <Main>
                <section className="lg:max-w-4xl xl:max-w-max mx-auto mb-10">
                    <Carousel autoSlide={true}>
                        {slides.map((CarouselBanner, index) =>(
                            <CarouselBanner key={index}/>
                        ))}
                    </Carousel>
                </section>

                <section className="p-2 text-gray-700 mb-10">
                    <h3 className="font-bold">Categories</h3>
                    <Slider>
                        {categories.map((c, i) => (
                            <div className="p-3 w-24 md:w-56 rounded-md hover:bg-gray-100" key={i}>
                               {c.thumbnail === '' ? (
                                    <div className="mx-auto rounded-md w-20 md:w-48 h-20 md:h-48 bg-amber-400 text-center text-xs text-white">
                                        <span className="mt-20">Image Unavailable</span>
                                    </div>
                               ) : (
                                    <img src={`http://localhost:3000/category/thumbnails/${c.thumbnail}`} alt="" className="mx-auto rounded-md w-20 md:w-48 h-20 md:h-48"/>
                               )}
                                <h5 className="text-xs text-center truncate font-light">{c.category_name}</h5>
                            </div>
                        ))}
                    </Slider>
                </section>

                <section className="p-3 text-gray-700 mb-10">
                    <h3 className="font-bold">Featured Products</h3>
                    <Slider>
                        {products.map((p, i) =>(
                            <div className="p-3 w-24 md:w-56 rounded-md hover:bg-gray-100" key={i}>
                               {p.thumbnail === '' ? (
                                    <div className="mx-auto rounded-md w-20 md:w-48 h-20 md:h-48 bg-amber-400 text-center text-xs text-white">
                                        <span className="mt-20">Image Unavailable</span>
                                    </div>
                               ) : (
                                    <img src={`http://localhost:3000/product/thumbnails/${p.thumbnail}`} alt="" className="mx-auto rounded-md w-20 md:w-48 h-20 md:h-48"/>
                               )}
                                <h5 className="text-xs text-center truncate font-light">{p.name}</h5>
                            </div>
                        ))}
                    </Slider>
                </section>
            </Main>
        <Footer />
        </>
    )
}

export default Home;