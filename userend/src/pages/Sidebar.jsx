import React from "react";
import "../sidebar.css";
import { SiCivicrm, SiGoogleads } from "react-icons/si";
import { MdDashboardCustomize, MdAccountBalance } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { TbInvoice, TbReport } from "react-icons/tb";
import { BiExport } from "react-icons/bi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-blue-900 text-white h-screen flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className={`font-bold text-lg`}>
          {isSidebarOpen ? (
            <>
              <div className="flex items-center space-x-2">
                <h2>CRM</h2> <SiCivicrm />
              </div>
            </>
          ) : (
            <SiCivicrm />
          )}
        </h1>
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-300 focus:outline-none"
        >
          {isSidebarOpen ? "←" : "→"}
        </button>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul>
          <li className="p-4 hover:bg-blue-800">
            <div className="flex items-center space-x-2">
              <MdDashboardCustomize className="text-4xl" />{" "}
              <span className="text-lg">Dashboard</span>
            </div>
          </li>
          <li className="p-4 hover:bg-blue-800">
            {" "}
            <div className="flex items-center space-x-2">
              <SiGoogleads className="text-4xl" />{" "}
              <span className="text-lg">Leads</span>
            </div>
          </li>
          <li className="p-4 hover:bg-blue-800">
            {" "}
            <div className="flex items-center space-x-2">
              <SiGoogleads className="text-4xl" />{" "}
              <span className="text-lg">Social Media Leads</span>
            </div>
          </li>

          <li className="p-4 hover:bg-blue-800">
            <div className="flex items-center space-x-2">
              <TbInvoice className="text-4xl" />{" "}
              <span className="text-lg">Quotation & Invoice</span>
            </div>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <div className="flex items-center space-x-2">
              <BiExport className="text-4xl" />{" "}
              <span className="text-lg">Export</span>
            </div>
          </li>
          <li className="p-4 hover:bg-blue-800">
            {" "}
            <div className="flex items-center space-x-2">
              <TbReport className="text-4xl" />{" "}
              <span className="text-lg">Report</span>
            </div>
          </li>

          <li className="p-4 hover:bg-blue-800">
            <div className="flex items-center space-x-2">
              <IoMdAnalytics className="text-4xl" />{" "}
              <span className="text-lg">Lead Analytics</span>
            </div>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <div className="flex items-center space-x-2">
              <GiSatelliteCommunication className="text-4xl" />{" "}
              <span className="text-lg">Omnichannel communication</span>
            </div>
          </li>
          <li className="p-4 hover:bg-blue-800">
            <div className="flex items-center space-x-2">
              <TfiHeadphoneAlt className="text-4xl" />{" "}
              <span className="text-lg">Team Meeting</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
