import Slider from "react-slick/lib/slider";


const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Professionally scale B2B communities before proactive methods of empowerment. Continually incubate revolutionary systems whereas exceptional.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Satya Nadella",
        text: "Holisticly strategize ethical infomediaries without optimal testing procedures. Interactively coordinate client-centric convergence for extensive information.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Virat Kohli",
        text: "Compellingly aggregate state of the art systems without enterprise bandwidth. Dramatically matrix open-source alignments through.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Virender Sehwag",
        text: "Credibly build future-proof innovation after innovative convergence. Progressively reintermediate cross-media e-services after extensive services. Holisticly.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Sachin Tendulkar",
        text: "Completely synergize bricks-and-clicks niches after user-centric platforms. Conveniently network technically sound testing procedures before innovative.",
        img: "https://picsum.photos/105/105",
    },
]

const Testimonials = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinity: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    }

    return (
        <div className="py-10">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
                    <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Credibly incentivize focused process improvements and inexpensive information. Enthusiastically procrastinate stand-alone content with transparent methodologies.</p>
                </div>

                {/* Testimonials Cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialData.map((data) => (
                                <div
                                    key={data.id}
                                    className="my-6"
                                >
                                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <div className="mb-4">
                                            <img src={data.img} alt=""
                                                className="rounded-full w-20 h-20"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <p className="text-xs text-gray-400">{data.text}</p>
                                                <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;