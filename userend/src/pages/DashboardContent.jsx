import React from "react";
import MonthLeadChart from "../charts/MonthLeadChart";
import SalesFunnel from "../charts/SalesFunnel";
import SalesAndViews from "../charts/SalesAndViews";
import AccountQuotInv from "../components/Dashboard/AccountQuotInv";
import MeetingCallsChat from "../components/Dashboard/MeetingCallsChat";
import LeadCircleChart from "../charts/LeadCircleChart";

const DashboardContent = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl">Dashboard</h1>
      <div className="flex space-x-2">
        <div className="w-1/3 p-2 shadow-xl shadow-blue-100 rounded-xl">
          <SalesFunnel />
        </div>
        <div className="w-2/3 p-2 shadow-xl shadow-blue-100 rounded-xl">
          {/* <MonthLeadChart /> */}
          {/* <SalesAndViews /> */}
          <LeadCircleChart />
        </div>
      </div>
      <div>
        <AccountQuotInv />
      </div>
      <div>
        <MeetingCallsChat />
      </div>
    </div>
  );
};

export default DashboardContent;
