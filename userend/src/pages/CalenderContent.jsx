import React from "react";
import CalenderData from "../components/CalenderData";

const CalenderContent = () => {
  const events = [
    { date: "2024-10-10", time: "10:00 AM", title: "Client Meeting" },
    { date: "2024-10-10", time: "01:00 PM", title: "Team Sync" },
    { date: "2024-10-15", time: "09:00 AM", title: "Project Presentation" },
    { date: "2024-10-15", time: "09:00 AM", title: "Project demo" },
    { date: "2024-10-20", time: "04:00 PM", title: "Task Review" },
  ];
  return (
    <div className="my-6 mx-4">
      <div className="mt-12">
        <CalenderData events={events} />
      </div>
    </div>
  );
};

export default CalenderContent;
