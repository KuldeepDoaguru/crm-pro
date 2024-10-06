import CustomerReviewCard from "./CustomerReviewCard";
import TeamChat from "./TeamChat";

const MeetingCallsChat = () => {
  const projects = [
    {
      title: "Angular 12",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-red-500",
      executive_name: "Mohit",
    },
    {
      title: "React Js",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-blue-500",
      executive_name: "Mohit",
    },
    {
      title: "Vue Js",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-green-500",
      executive_name: "Mohit",
    },
    {
      title: "Bootstrap 5",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-purple-500",
      executive_name: "Mohit",
    },
    {
      title: "Magento",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-orange-500",
      executive_name: "Mohit",
    },
    {
      title: "Django",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-teal-500",
      executive_name: "Mohit",
    },
    {
      title: "Python",
      from: "12:00 PM",
      to: "01:00 PM",
      contact_person: "Shubham",
      color: "bg-yellow-500",
      executive_name: "Mohit",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Ongoing Projects */}
      <div className="bg-white max-h-[38rem] rounded-lg shadow-xl shadow-blue-100 p-4">
        <h2 className="text-lg font-semibold mb-4 mt-5">Todays Meeting</h2>
        {projects.slice(0, 5).map((project, index) => (
          <>
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="text-sm font-semibold text-sky-400">
                    Timing : {project.from} - {project.to}
                  </p>
                  <p className="text-sm">
                    Contact Person - {project.contact_person}
                  </p>
                  <p className="text-sm">
                    Executive Name - {project.executive_name}
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
        <div className="flex justify-center">
          <button className="text-cyan-800 font-bold cursor-pointer hover:text-blue-600 mt-2">
            View More Details
          </button>
        </div>
      </div>

      {/* Campaign */}
      <div className="bg-white rounded-lg shadow-xl shadow-blue-100 ">
        {/* <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
        {campaigns.map((campaign, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full ${campaign.color} mr-4`}
              ></div>
              <h3 className="text-sm font-semibold">{campaign.name}</h3>
            </div>
            <p className="text-sm font-semibold">{campaign.progress}%</p>
          </div>
        ))} */}
        <CustomerReviewCard />
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-xl shadow-blue-100 p-4">
        {/* <h2 className="text-lg font-semibold mb-4">Team Chat</h2>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full ${transaction.iconColor} mr-4`}
              ></div>
              <div>
                <h3 className="text-sm font-semibold">{transaction.title}</h3>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <p className="text-sm font-semibold">{transaction.amount}</p>
          </div>
        ))} */}
        <TeamChat />
      </div>
    </div>
  );
};

export default MeetingCallsChat;
