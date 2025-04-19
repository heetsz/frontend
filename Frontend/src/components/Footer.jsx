import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Search, Bookmark, HelpCircle, Map } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const navItems = [
    { id: "/home", label: "Home", icon: Home },
    { id: "/add-vendor", label: "Add Vendor", icon: Search },
    { id: "/map", label: "Map", icon: Map },
    { id: "/yourreviews", label: "Reviews", icon: Bookmark },
    { id: "/newcomers", label: "Newcomers", icon: HelpCircle }
  ];

  const handleNavigation = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className="flex flex-col items-center justify-center w-1/5 focus:outline-none"
          >
            <item.icon
              size={20}
              className={activeTab === item.id ? "text-red-500" : "text-gray-500"}
            />
            <span
              className={`text-xs mt-1 ${
                activeTab === item.id ? "text-red-500 font-medium" : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Footer;