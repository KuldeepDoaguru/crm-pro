const AccountQuotInv = () => {
  const projects = [
    {
      name: "Angular 12",
      desc: "Admin Template",
      progress: 95,
      color: "bg-red-500",
    },
    {
      name: "React Js",
      desc: "eCommerce Admin",
      progress: 90,
      color: "bg-blue-500",
    },
    {
      name: "Vue Js",
      desc: "Dashboard Template",
      progress: 85,
      color: "bg-green-500",
    },
    {
      name: "Bootstrap 5",
      desc: "Corporate Website",
      progress: 75,
      color: "bg-purple-500",
    },
    {
      name: "Magento",
      desc: "Shopping Portal",
      progress: 65,
      color: "bg-orange-500",
    },
    {
      name: "Django",
      desc: "Backend Admin",
      progress: 55,
      color: "bg-teal-500",
    },
    {
      name: "Python",
      desc: "User Panel",
      progress: 45,
      color: "bg-yellow-500",
    },
  ];

  const campaigns = [
    {
      name: "Doaguru Infosystems",
      progress: 55,
      date: "12/12/2024",
      color: "bg-blue-600",
    },
    {
      name: "Doaguru Infosystems",
      progress: 67,
      date: "12/12/2024",
      color: "bg-blue-700",
    },
    {
      name: "Doaguru Infosystems",
      progress: 78,
      date: "12/12/2024",
      color: "bg-pink-600",
    },
    {
      name: "Doaguru Infosystems",
      progress: 46,
      date: "12/12/2024",
      color: "bg-yellow-400",
    },
    {
      name: "Doaguru Infosystems",
      progress: 38,
      date: "12/12/2024",
      color: "bg-red-500",
    },
    {
      name: "Doaguru Infosystems",
      progress: 15,
      date: "12/12/2024",
      color: "bg-purple-500",
    },
    {
      name: "Doaguru Infosystems",
      progress: 12,
      date: "12/12/2024",
      color: "bg-green-600",
    },
    {
      name: "Doaguru Infosystems",
      progress: 24,
      date: "12/12/2024",
      color: "bg-yellow-300",
    },
  ];

  const transactions = [
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$97,896",
      iconColor: "bg-pink-500",
    },
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$86,469",
      iconColor: "bg-blue-500",
    },
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$45,259",
      iconColor: "bg-green-500",
    },
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$35,249",
      iconColor: "bg-purple-500",
    },
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$68,478",
      iconColor: "bg-orange-500",
    },
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$55,128",
      iconColor: "bg-blue-500",
    },
    {
      title: "Doaguru Infosystems",
      date: "03/10/2022",
      amount: "$24,568",
      iconColor: "bg-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* Ongoing Projects */}
      <div className="bg-white rounded-lg shadow-xl shadow-blue-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Ongoing Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-semibold">{project.name}</h3>
                <p className="text-xs text-gray-500">{project.desc}</p>
              </div>
              <p className="text-sm font-semibold">{project.progress}%</p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                className={`${project.color} h-full rounded-full`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign */}
      <div className="bg-white rounded-lg shadow-xl shadow-blue-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Quotation</h2>
        {campaigns.map((campaign, index) => (
          <div key={index} className="flex justify-between mb-4">
            <div className="flex items-center">
              {/* <div
                className={`h-8 w-8 rounded-full ${campaign.color} mr-4`}
              ></div> */}
              <div>
                <h3 className="text-sm font-semibold">{campaign.name}</h3>
                <p className="text-xs text-gray-500">{campaign.date}</p>
              </div>
            </div>
            <button className="text-sm text-white font-semibold bg-sky-600 hover:bg-sky-700 shadow-lg p-2 rounded-lg">
              View
            </button>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-xl shadow-blue-100 p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Invoice</h2>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              {/* <div
                className={`h-8 w-8 rounded-full ${transaction.iconColor} mr-4`}
              ></div> */}
              <div>
                <h3 className="text-sm font-semibold">{transaction.title}</h3>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <button className="text-sm text-white font-semibold bg-sky-600 hover:bg-sky-700 shadow-lg p-2 rounded-lg">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountQuotInv;
