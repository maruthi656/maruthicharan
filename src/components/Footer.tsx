
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white font-heading">
              <span className="text-gradient">Maruthi</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} V.V. Maruthi Charan. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Designed and developed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
