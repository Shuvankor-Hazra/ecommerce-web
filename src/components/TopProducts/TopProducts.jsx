import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/shirt/shirt1.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "Enthusiastically recaptiualize professional vortals for ethical e-business. Enthusiastically integrate user-centric convergence and empowered models. Completely deploy empowered web services after.",
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: "Dramatically formulate impactful value via real-time data. Proactively optimize business portals after world-class vortals. Intrinsicly transform principle-centered technology before enterprise-wide.",
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: "Authoritatively scale equity invested convergence through top-line quality vectors. Efficiently innovate premier core competencies through team driven potentialities. Appropriately create.",
    }
]

const TopProducts = () => {

    const handleOrderPopup = () => { alert("Order Pop Up") };

    return (
        <>
            <div className="container">
                {/* Header Section */}
                <div className="mb-24 space-y-2">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Uniquely embrace long-term high-impact benefits without emerging methods of empowerment.</p>
                </div>

                {/* Body Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-20 md:gap-5">
                    {
                        ProductsData.map((data) => (
                            <div
                                data-aos="zoom-in"
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                                key={data.id}>
                                {/* Image Section */}
                                <div className="h-[100px]">
                                    <img src={data.img} alt=""
                                        className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                    />
                                </div>
                                {/* Details Section */}
                                <div className="p-4 text-center">
                                    {/* Star Rating */}
                                    <div className="w-full flex items-center justify-center gap-0.5">
                                        <FaStar className="text-primary" />
                                        <FaStar className="text-primary" />
                                        <FaStar className="text-primary" />
                                        <FaStar className="text-primary" />
                                        <FaStar className="text-primary" />
                                    </div>
                                    <h1>{data.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                                    <button
                                        className="bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                        onClick={handleOrderPopup}
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default TopProducts;
