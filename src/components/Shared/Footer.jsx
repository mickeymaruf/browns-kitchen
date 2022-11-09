import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 py-16 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/services" className="link link-hover">Services</Link>
                <Link to="/blog" className="link link-hover">Blog</Link>
                <Link to="/" className="link link-hover">About</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.github.com/mickeymaruf/'><FaGithub className='w-5 h-5 cursor-pointer mr-2 text-orange-500' /></a>
                    <a href='https://twitter.com/mickeymaruf/'><FaTwitter className='w-5 h-5 cursor-pointer mr-2 text-orange-500' /></a>
                    <a href='https://www.linkedin.com/in/mickeymaruf/'><FaLinkedin className='w-5 h-5 cursor-pointer mr-2 text-orange-500' /></a>
                    <a href='https://www.facebook.com/mickeymaruf/'><FaFacebook className='w-5 h-5 cursor-pointer mr-2 text-orange-500' /></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Browns Kitchen</p>
            </div>
        </footer>
    );
};

export default Footer;