import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute w-full z-10 flex justify-between items-center p-6 font-alata text-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-6 container text-3xl font-josefin font-light">
        loopstudios
      </div>
      <button className="btn-menu">
        <ul className="flex space-x-6 font-medium">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Support</li>
        </ul>
      </button>
    </nav>
  );
};

export default Navbar;
