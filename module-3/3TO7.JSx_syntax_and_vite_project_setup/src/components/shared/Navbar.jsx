import React from "react";

function Navbar() {
  return (
    <>
      {/* create a beautyful navbar using tailwind and responsive */}
      <nav className="bg-gray-800">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-white md:flex md:items-center">
              <a href="#" className="text-lg font-semibold">
                Brand
              </a>
              <a href="#" className="mx-5 hover:text-white">
                Home
              </a>
              <a href="#" className="mx-5 hover:text-white">
                Shop
              </a>
              <a href="#" className="mx-5 hover:text-white">
                Contact
              </a>
            </div>
            <div className="w-full text-white md:hidden">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
