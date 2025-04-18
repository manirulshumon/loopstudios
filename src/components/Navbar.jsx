import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute w-full z-10">
      <div className="w-full max-w-[1140px] mx-auto px-6 py-6 flex justify-between items-center font-alata text-white">
        <div className="text-3xl font-josefin font-bold">
          loopstudios
        </div>
        <ul className="flex space-x-6 font-medium">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Support</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
