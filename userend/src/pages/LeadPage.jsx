import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LeadPageContent from "./LeadPageContent";

const LeadPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`main-content transition-all w-full duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Header isSidebarOpen={isSidebarOpen} />
          <LeadPageContent />
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
