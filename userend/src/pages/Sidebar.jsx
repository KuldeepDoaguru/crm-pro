import "../sidebar.css";
import { SiCivicrm, SiGoogleads } from "react-icons/si";
import { MdAccountBalance, MdDashboardCustomize } from "react-icons/md";
import { TbInvoice, TbReport } from "react-icons/tb";
import { BiExport } from "react-icons/bi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-sky-600 text-white h-screen pb-6 fixed left-0 top-0 flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h1 className={`font-bold text-lg transition-all duration-300`}>
          {isSidebarOpen ? (
            <div className="flex items-center space-x-2">
              <h2>CRM</h2> <SiCivicrm />
            </div>
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
      <nav className="flex-1 overflow-y-auto mt-3">
        <ul>
          <li className="p-4 pt-4 hover:bg-white hover:font-bold hover:text-black">
            <Link to="/">
              <div className="flex items-center space-x-2">
                <MdDashboardCustomize className="text-4xl" />{" "}
                <span className="text-lg">Dashboard</span>
              </div>
            </Link>
          </li>
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <Link to="/lead-page">
              <div className="flex items-center space-x-2">
                <SiGoogleads className="text-4xl" />{" "}
                <span className="text-lg">Leads</span>
              </div>
            </Link>
          </li>
          {/* <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <SiGoogleads className="text-4xl" />{" "}
              <span className="text-lg">Social Media Leads</span>
            </div>
          </li> */}
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <TbInvoice className="text-4xl" />{" "}
              <span className="text-lg">Quotation & Invoice</span>
            </div>
          </li>
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <Link to="/calender-page">
              <div className="flex items-center space-x-2">
                <SlCalender className="text-4xl" />{" "}
                <span className="text-lg">Calender</span>
              </div>
            </Link>
          </li>
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <TbReport className="text-4xl" />{" "}
              <span className="text-lg">Report</span>
            </div>
          </li>
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <IoMdAnalytics className="text-4xl" />{" "}
              <span className="text-lg">Lead Analytics</span>
            </div>
          </li>
          {/* <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <GiSatelliteCommunication className="text-4xl" />{" "}
              <span className="text-lg">Omnichannel communication</span>
            </div>
          </li> */}
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <TfiHeadphoneAlt className="text-4xl" />{" "}
              <span className="text-lg">Team Meeting</span>
            </div>
          </li>
          <li className="p-4 hover:bg-white hover:font-bold hover:text-black">
            <div className="flex items-center space-x-2">
              <MdAccountBalance className="text-4xl" />{" "}
              <span className="text-lg">Client Accounts</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
