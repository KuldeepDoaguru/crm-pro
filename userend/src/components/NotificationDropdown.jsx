import React from "react";
import {
  FiUserPlus,
  FiShoppingCart,
  FiFileText,
  FiClock,
  FiCheckCircle,
  FiMessageCircle,
} from "react-icons/fi";

const NotificationDropdown = () => {
  const notifications = [
    {
      icon: <FiUserPlus className="text-blue-500" />,
      title: "New Customers",
      description: "5 new user registered",
      time: "14 sec ago",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FiShoppingCart className="text-red-500" />,
      title: "New Orders",
      description: "You have received new orders",
      time: "2 min ago",
      bgColor: "bg-red-100",
    },
    {
      icon: <FiFileText className="text-green-500" />,
      title: "24 PDF File",
      description: "The pdf files generated",
      time: "19 min ago",
      bgColor: "bg-green-100",
    },
    {
      icon: <FiClock className="text-yellow-500" />,
      title: "Time Response",
      description: "5.1 min average time response",
      time: "28 min ago",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FiCheckCircle className="text-teal-500" />,
      title: "New Product Approved",
      description: "Your new product has approved",
      time: "2 hrs ago",
      bgColor: "bg-teal-100",
    },
    {
      icon: <FiMessageCircle className="text-pink-500" />,
      title: "New Comments",
      description: "New customer comments received",
      time: "4 hrs ago",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <button className="text-sm text-blue-500">Marks all as read</button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 mb-2 rounded-lg ${notification.bgColor}`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              {notification.icon}
            </div>
            <div className="flex-1">
              <p className="font-semibold">{notification.title}</p>
              <p className="text-sm text-gray-500">
                {notification.description}
              </p>
            </div>
            <div className="text-xs text-gray-400">{notification.time}</div>
          </div>
        ))}
      </div>
      <div className="text-center py-2 border-t">
        <button className="text-sm text-blue-500">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;
