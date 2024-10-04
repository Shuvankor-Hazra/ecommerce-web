import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaTwitter, } from 'react-icons/fa6';
import footerLogo from '../../assets/logo.png';
import Banner from '../../assets/website/footer-pattern.png';

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",

}

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Contact",
        link: "/#blog",
    },
    {
        id: 1,
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {

    return (
        <div
            style={BannerImg}
            className='text-white'>
            <div className='container'>
                <div
                    data-aos="zoom-in"
                    className='grid md:grid-cols-3 pb-44 pt-5'>
                    {/* Company Details */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 cursor-pointer'>
                            <img src={footerLogo} alt=""
                                className='max-w-[50px]'
                            />
                            Shopping</h1>
                        <p>Continually underwhelm accurate platforms for end-to-end convergence. Interactively engineer competitive supply chains before distributed markets.</p>
                    </div>

                    {/* Footer Links */}
                    <div className='grid grid-cols-3 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                    Important Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li
                                            className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                            key={link.id}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                    Links
                                </h1>
                                <ul className='flex flex-col gap-3'>
                                    {FooterLinks.map((link) => (
                                        <li
                                            className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'
                                            key={link.id}>
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className='py-2 px-4'>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:scale-125 duration-200' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:scale-125 duration-200' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:scale-125 duration-200' />
                                </a>
                                <a href="#">
                                    <FaTwitter className='text-3xl hover:scale-125 duration-200' />
                                </a>
                            </div>

                            <div className='pt-3'>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaLocationArrow />
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaMobileAlt />
                                    <p>+88-01234-567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
