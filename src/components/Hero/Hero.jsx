/* eslint-disable react/prop-types */
import Slider from "react-slick";
import Image1 from "../../assets/hero/sale.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/women.png";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% off on all Man's Wear",
        description: "Rapaciously pursue turnkey data after revolutionary collaboration and idea-sharing. Objectively evolve ubiquitous portals after one-to-one convergence. Holistically syndicate leveraged experiences before."
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 30% off on all Woman's Wear",
        description: "Progressively grow professional action items via go forward ideas. Compellingly orchestrate B2B data before distinctive alignments. Assertively transition process improvements and holistic information."
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 70% off on all Products Sale",
        description: "Authoritatively implement next-generation relationships rather than covalent technology. Competently whiteboard focused niches vis-a-vis cross functional content. Energetically maximize cross-platform expertise."
    },
]

const Hero = ({ handleOrderPopup }) => {

    var settings = {
        dots: false,
        arrows: false,
        infinity: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "each-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }

    return (
        < div className="relative overflow-hidden min-h-[550px] sm:max-h-[650px] bg-gray-100 flex items-center justify-center dark:bg-gray-950 dark:text-white duration-200" >
            {/* Background Pattern */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 ring-0 rounded-3xl rotate-45 -z-9" >
            </div>
            {/* Hero Section */}
            <div className="container pb-8 sm:pb-0" >
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* Text Content Section */}
                                <div className="flex flex-col justify-center gap-4 py-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className="text-sm">
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                        <button
                                            onClick={() => handleOrderPopup()}
                                            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 ml-1 rounded-full">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="order-1 sm:order-2">
                                    <div className="relative z-10">
                                        <img
                                            src={data.img}
                                            alt="Image1"
                                            className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
}

export default Hero;
