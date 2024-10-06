import {
  FiUserPlus,
  FiShoppingCart,
  FiFileText,
  FiClock,
  FiCheckCircle,
  FiMessageCircle,
} from "react-icons/fi";

const MessageDropdown = () => {
  const notifications = [
    {
      icon: "https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg",
      title: "Mahesh Kuldeep",
      description:
        "Feeling proud of myself. Always happy and excited whenever I wear the Indian jersey.",
      time: "14 sec ago",
      bgColor: "bg-blue-100",
    },
    {
      icon: "https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg",
      title: "Mahesh Kuldeep",
      description:
        "Feeling proud of myself. Always happy and excited whenever I wear the Indian jersey.",
      time: "2 min ago",
      bgColor: "bg-red-100",
    },
    {
      icon: "https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg",
      title: "Mahesh Kuldeep",
      description: "The pdf files generated",
      time: "19 min ago",
      bgColor: "bg-green-100",
    },
    {
      icon: "https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg",
      title: "Mahesh Kuldeep",
      description:
        "Feeling proud of myself. Always happy and excited whenever I wear the Indian jersey.",
      time: "28 min ago",
      bgColor: "bg-yellow-100",
    },
    {
      icon: "https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg",
      title: "Mahesh Kuldeep",
      description: "Your new product has approved",
      time: "2 hrs ago",
      bgColor: "bg-teal-100",
    },
    {
      icon: "https://res.cloudinary.com/dq5upuxm8/image/upload/v1724768237/bigbull/portrait-smiling-boy-helmet-sunglasses-3d-rendering_hhvsge.jpg",
      title: "Mahesh Kuldeep",
      description: "New customer comments received",
      time: "4 hrs ago",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <>
      <div className="w-80 bg-white shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <h3 className="text-lg font-semibold">Messages</h3>
          <button className="text-sm text-blue-500">Marks all as read</button>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 mb-2 rounded-lg ${notification.bgColor}`}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full">
                <img
                  src={notification.icon}
                  alt="user"
                  className="h-10 w-10 rounded-s-full"
                />{" "}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{notification.title}</p>
                <p className="text-sm text-gray-500">
                  {notification.description.slice(0, 20)}
                </p>
              </div>
              <div className="text-xs text-gray-400">{notification.time}</div>
            </div>
          ))}
        </div>
        <div className="text-center py-2 border-t">
          <button className="text-sm text-blue-500">View All Messages</button>
        </div>
      </div>
    </>
  );
};

export default MessageDropdown;
