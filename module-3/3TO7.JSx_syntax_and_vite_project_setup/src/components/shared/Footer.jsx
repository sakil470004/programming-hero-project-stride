import React from "react";

export default function Footer() {
  return (
    <div>
      {/* create a footer using daisy ui */}
      <footer className="bg-gray-800 py-20 mt-20">
        <div className="container mx-auto px-6">
          <div className="lg:flex">
            <div className="w-full lg:w-1/4">
              <h3 className="text-3xl text-white font-bold">Brand</h3>
              <p className="mt-2 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                auctor ipsum ut dui laoreet, at lacinia lorem semper.
              </p>
            </div>
            <div className="w-full mt-8 lg:mt-0 lg:w-1/4">
              <h3 className="text-3xl text-white font-bold">Shop</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="text-white hover:underline">
                    Shoes
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white hover:underline">
                    T-Shirt
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white hover:underline">
                    Jeans
                  </a>
                </li>
                <li className="mt-2">
                  <a href="#" className="text-white chover:underline">
                    Dress
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
