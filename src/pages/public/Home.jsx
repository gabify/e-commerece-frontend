import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import Main from "../../components/Main.jsx";
import Carousel from "../../components/Carousel.jsx";
import Slider from "../../components/Slider.jsx";

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
            <div className='bg-hero-1 bg-cover w-screen min-w-full snap-center shrink-0 p-5'>
                <h1 className="px-2 py-1 bg-amber-400 inline font-bebas text-xl text-gray-50">Craft your world.</h1>
                <h2 className="text-gray-50 text-4xl -mb-1 mt-4">Build with Style.</h2>
                <p className="text-sm text-gray-300">Everything you need to craft your next adventure.</p>
            </div>
        )
    }

    const carousel2 = () =>{
        return(
            <div className='bg-hero-2 bg-cover w-screen min-w-full shrink-0 p-5'>
                <h2 className="text-gray-50 text-2xl -mb-1 mt-4 font-bebas">Gear Up for Your Next Quest.</h2>
                <p className="text-xs text-gray-300">Explore confidently with premium Minecraft gear.</p>
                <button className="bg-amber-400 px-2 py-0.5 rounded-lg text-gray-50 font-bebas cursor-pointer hover:text-gray-300">
                    Shop Now!
                </button>
            </div>
        )
    }

    const carousel3 = () =>{
        return(
            <div className='bg-hero-3 bg-cover w-screen snap-center shrink-0 px-4'>
                <h2 className="text-gray-50 text-xl -mb-1 mt-4 font-bebas">Rare Finds for True Builders.</h2>
                <p className="text-xs text-gray-300 mb-10">Discover exclusive blocks, skins, and collectibles.</p>
            </div>
        )
    }

    const carousel4 = () =>{
        return(
            <div className='bg-hero-4 bg-cover w-screen snap-center shrink-0 px-4'>
                <h2 className="text-gray-50 text-3xl -mb-2 mt-4 font-bebas text-center tracking-wide">Fast Delivery</h2>
                <h2 className="text-red-700 text-shadow-md text-xl font-bebas text-center mb-7">No Redstone Required.</h2>
                <p className="text-xs text-gray-300">Quick, easy, and creeper-proof checkout.</p>
                <p className="text-xs text-gray-300">Your favorite Minecraft items delivered like magic.</p>
            </div>
        )
    }

    const carousel5 = () =>{
        return(
            <div className='bg-hero-5 bg-cover w-screen snap-center shrink-0 px-4'>
                <h2 className="text-gray-50 text-center text-xl -mb-1.5 mt-4 font-bebas">Build. Trade. Play. Repeat.</h2>
                <p className="text-xs text-gray-300 mb-10">Join thousands of crafters leveling up their world.</p>
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

const Home = () =>{
    return(
        <>
        <Header />
            <Main>
                <section className="max-w-2xl mx-auto mb-10">
                    <Carousel autoSlide={true} autoSlideInterval={5000}>
                        {slides.map((CarouselBanner, index) =>(
                            <CarouselBanner key={index}/>
                        ))}
                    </Carousel>
                </section>

                <section className="p-2">
                    <h3 className="font-bold">Categories</h3>
                    <Slider>
                        {categories.map((c, i) => (
                            <div className="p-3 hover:bg-gray-100" key={i}>
                                <div className="w-18 h-18 bg-amber-400 text-center text-xs text-white">
                                    <span className="mt-20">Image Unavailable</span>
                                </div>
                                <h5 className="text-sm">{c}</h5>
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