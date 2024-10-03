import { FaStar } from "react-icons/fa6";
import Img1 from "../../assets/women/women1.png";
import { default as Img2, default as Img5 } from "../../assets/women/women2.png";
import Img3 from "../../assets/women/women3.png";
import Img4 from "../../assets/women/women4.png";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Women Ethnic",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Women Ethnic",
        rating: 4.5,
        color: "Pink",
        aosDelay: "800",
    },
]

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div>
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Uniquely embrace long-term high-impact benefits without emerging methods of empowerment. Compellingly enable.</p>
                </div>

                {/* Body Section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* Card Section */}
                        {ProductsData.map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className="space-y-3"
                            >
                                <img src={data.img} alt=""
                                    className="h-[220px] w-[150px] object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-600">{data.color}</p>
                                    <div className="flex items-center gap-1 text-lg">
                                        <FaStar className="text-primary" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;