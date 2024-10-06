import React, { useState } from "react";

const LeadPageContent = () => {
  const leads = [
    {
      id: 1,
      leadNumber: "1464857924190421",
      name: "Asit Jain",
      phone: "+919425151005",
      source: "Facebook Campaign",
      assignedTo: "umer",
      subject: "Query",
      status: "in progress",
      createdTime: "2024-10-02",
    },
    {
      id: 2,
      leadNumber: "23",
      name: "test",
      phone: "8587185825",
      source: "One Realty Website",
      assignedTo: "umer",
      subject: "Query",
      status: "pending",
      createdTime: "2024-09-27",
    },
    {
      id: 3,
      leadNumber: "1060706775234400",
      name: "Shekhar Kumar Birha",
      phone: "+919300135211",
      source: "Facebook Campaign",
      assignedTo: "umer",
      subject: "Query",
      status: "pending",
      createdTime: "2024-09-30",
    },
    {
      id: 4,
      leadNumber: "966176071985321",
      name: "Ramakant Vishwakarma",
      phone: "+18319853029",
      source: "Facebook Campaign",
      assignedTo: "umer",
      subject: "Query",
      status: "pending",
      createdTime: "2024-10-01",
    },
    {
      id: 5,
      leadNumber: "1058794762319451",
      name: "Ashutosh Sharma (Ashu)",
      phone: "+918602279844",
      source: "Facebook Campaign",
      assignedTo: "umer",
      subject: "Query",
      status: "pending",
      createdTime: "2024-10-04",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 3;

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;

  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(leads.length / leadsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-4xl text-cyan-800 text-center mt-12">Total Leads</h2>
      <div className="container mx-2 w-[92%] p-4 mt-12">
        <div className="flex justify-between space-x-2 mb-4">
          <div className="w-96">
            <label htmlFor="" className="font-bold">
              Search
            </label>
            <br />
            <input
              type="text"
              placeholder="Search by Name, Lead No, Lead Source"
              className="border p-2 rounded-2xl w-full"
            />
          </div>
          <div className="w-64">
            <label htmlFor="" className="font-bold">
              Filter By:
            </label>
            <br />
            <select name="" id="" className="border p-2 rounded-2xl w-auto">
              <option value="">-select-</option>
              <option value="">Website</option>
              <option value="">Social Media</option>
            </select>
          </div>
          <div className="flex space-x-4 w-64 justify-end">
            <div>
              <label htmlFor="" className="font-bold">
                Start Date
              </label>
              <br />
              <input
                type="date"
                placeholder="Start Date"
                className="border p-2 rounded-2xl w-48"
              />
            </div>
            <div>
              <label htmlFor="" className="font-bold">
                End Date
              </label>
              <br />
              <input
                type="date"
                placeholder="End Date"
                className="border p-2 rounded-2xl w-48"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="text-nowrap">
                <th className="py-4 px-4 border-b">S.no</th>
                <th className="py-4 px-4 border-b">Lead Number</th>
                <th className="py-4 px-4 border-b">Name</th>
                <th className="py-4 px-4 border-b">Phone</th>
                <th className="py-4 px-4 border-b">Lead Source</th>
                <th className="py-4 px-4 border-b">Assigned To</th>
                <th className="py-4 px-4 border-b">Subject</th>
                <th className="py-4 px-4 border-b">Lead Status</th>
                <th className="py-4 px-4 border-b">Created Time</th>
                <th className="py-4 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.map((lead, index) => (
                <tr key={lead.id} className="text-nowrap">
                  <td className="py-4 px-4 border-b">
                    {indexOfFirstLead + index + 1}
                  </td>
                  <td className="py-4 px-4 border-b text-blue-500">
                    <a href="#">{lead.leadNumber}</a>
                  </td>
                  <td className="py-4 px-4 border-b">{lead.name}</td>
                  <td className="py-4 px-4 border-b">{lead.phone}</td>
                  <td className="py-4 px-4 border-b">{lead.source}</td>
                  <td className="py-4 px-4 border-b">{lead.assignedTo}</td>
                  <td className="py-4 px-4 border-b">{lead.subject}</td>
                  <td
                    className={`py-4 px-4 border-b ${
                      lead.status === "in progress"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {lead.status}
                  </td>
                  <td className="py-4 px-4 border-b">{lead.createdTime}</td>
                  <td className="py-4 px-4 border-b">
                    <button className="text-blue-500 mr-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="text-red-500">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center space-x-2 items-center mt-4">
          <button
            onClick={handlePrevPage}
            className={`bg-sky-300 py-2 px-4 rounded ${
              currentPage === 1 && "opacity-50"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            onClick={handleNextPage}
            className={`bg-sky-300 py-2 px-4 rounded ${
              currentPage === Math.ceil(leads.length / leadsPerPage) &&
              "opacity-50"
            }`}
            disabled={currentPage === Math.ceil(leads.length / leadsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadPageContent;
