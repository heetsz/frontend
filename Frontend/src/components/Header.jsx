import React from "react";
import { Search } from "lucide-react";
import {UserButton} from "@clerk/clerk-react";
const Header = () => {
  return (
    <div className="bg-white px-4 pt-4 pb-2">
      {/* App Title and Profile */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold text-red-500">Street-Sure</h1>
          <p className="text-xs text-gray-500 italic">"Eat Smart, Eat Safe – with StreetSure."</p>
        </div>
        <UserButton className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden" />
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for vendors, dishes..."
            className="bg-transparent w-full focus:outline-none text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;