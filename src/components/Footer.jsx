import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-sm text-gray-600">
       
          <div>
            <h4 className="text-gray-900 font-medium">Product</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-800">Overview</a></li>
              <li><a href="#" className="hover:text-gray-800">Features</a></li>
              <li className="flex items-center space-x-2">
                <a href="#" className="hover:text-gray-800">Solutions</a>
                <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">New</span>
              </li>
              <li><a href="#" className="hover:text-gray-800">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-800">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-800">Releases</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-gray-900 font-medium">Company</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-800">About us</a></li>
              <li><a href="#" className="hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="hover:text-gray-800">Press</a></li>
              <li><a href="#" className="hover:text-gray-800">News</a></li>
              <li><a href="#" className="hover:text-gray-800">Media kit</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-gray-900 font-medium">Resources</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-800">Blog</a></li>
              <li><a href="#" className="hover:text-gray-800">Newsletter</a></li>
              <li><a href="#" className="hover:text-gray-800">Events</a></li>
              <li><a href="#" className="hover:text-gray-800">Help center</a></li>
              <li><a href="#" className="hover:text-gray-800">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-800">Support</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-gray-900 font-medium">Use cases</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-800">Startups</a></li>
              <li><a href="#" className="hover:text-gray-800">Enterprise</a></li>
              <li><a href="#" className="hover:text-gray-800">Government</a></li>
              <li><a href="#" className="hover:text-gray-800">SaaS center</a></li>
              <li><a href="#" className="hover:text-gray-800">Marketplaces</a></li>
              <li><a href="#" className="hover:text-gray-800">Ecommerce</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-gray-900 font-medium">Social</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-800">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-800">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-800">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-800">GitHub</a></li>
              <li><a href="#" className="hover:text-gray-800">AngelList</a></li>
              <li><a href="#" className="hover:text-gray-800">Dribbble</a></li>
            </ul>
          </div>

       
          <div>
            <h4 className="text-gray-900 font-medium">Legal</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-800">Terms</a></li>
              <li><a href="#" className="hover:text-gray-800">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-800">Cookies</a></li>
              <li><a href="#" className="hover:text-gray-800">Licenses</a></li>
              <li><a href="#" className="hover:text-gray-800">Settings</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
        </div>

      
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 text-center sm:text-left">
          <div className="text-red-500 text-xl font-bold">Zysk</div>
          <p className="mt-2 sm:mt-0">© 2077 zysktechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
