import { FaFacebook, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#1d1d1d] text-white rounded-md font-bold text-[18px]">
                    <Link to='/'>
                <div className="flex items-center gap-0">
                <img src="https://i.ibb.co/K7QwqwD/CG-Logo.png" className="w-40" alt="" />
                <p className="text-3xl font-bold">CampGo</p>
                </div>
                    </Link>
                <div>
                    <span className="footer-title">WorkOut</span>
                    <a className="link link-hover">Karate</a>
                    <a className="link link-hover">Kick Boxing</a>
                    <a className="link link-hover">Boxing</a>
                    <a className="link link-hover">Point Fighting</a>
                </div>
                <div>
                    <span className="footer-title">Location</span>
                    <a className="link link-hover">Dhaka</a>
                    <a className="link link-hover">Rajshahi</a>
                    <a className="link link-hover">Sirajgonj</a>
                </div>
                <div>
                    <div className="form-control w-80">
                        <label className="">
                            <span className="text-white">Subcribe to our news letter</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-info hover:text-red-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            <div className=" flex gap-10 text-4xl">
                                <a className="text-blue-500" href="https://www.linkedin.com/in/abu-jayed-8b2b7926a/">
                            <FaLinkedin></FaLinkedin>
                                </a>
                                <a className="text-blue-600" href="https://twitter.com/mdabu_jayed?fbclid=IwAR27ROnehKt0S2m5xXM2SKk3hQFaGCSm-wWRrhvWsULiBNHObV7-TqWq_N8">
                            <FaTwitter></FaTwitter>
                                </a>
                                <a className="text-blue-500" href="https://web.facebook.com/abujayedmaj">

                            <FaFacebook></FaFacebook>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;