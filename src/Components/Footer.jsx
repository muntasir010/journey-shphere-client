import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center text-primary-content p-10 mt-10 bg-orange-400">
            <aside>
                <img className="w-16 rounded-full" src="https://i.ibb.co/Xy1QSWW/5205.jpg" alt="" />
                <p className="font-bold">
                   Journey Sphere Ltd.
                    <br />
                    Providing reliable tour since 2010
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-2xl" href=""><FaFacebook /></a>
                    <a className="text-2xl" href=""><FaTwitter /></a>
                    <a className="text-2xl" href=""><FaInstagram /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;