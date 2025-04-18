import React from 'react';
import FacebookIcon from '../../images/icon-facebook.svg';
import TwitterIcon from '../../images/icon-twitter.svg';
import InstagramIcon from '../../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="w-full max-w-[1140px] mx-auto px-6 flex justify-between items-center">
    
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-josefin">loopstudios</h2>
          <ul className="flex space-x-6 font-medium">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Events</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Support</li>
          </ul>
        </div>

        <div className="flex flex-col items-end space-y-4">
          <div className="flex space-x-4">
            <img src={FacebookIcon} alt="Facebook"/>
            <img src={TwitterIcon} alt="Twitter"/>
            <img src={InstagramIcon} alt="Instagram"/>
          </div>
          <p className="text-[13px] font-alata text-gray-400">
            2025 loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
