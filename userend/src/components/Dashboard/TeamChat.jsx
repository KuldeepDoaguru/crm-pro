import React from "react";

const TeamChat = () => {
  return (
    <div className="bg-white w-full max-w-md mx-auto shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3 mb-4">
        <h2 className="text-lg font-semibold">Team Chat</h2>
        <div className="flex space-x-2">
          {/* User Avatars */}
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="User 2"
            className="w-8 h-8 rounded-full"
          />
          <button className="p-2 bg-gray-200 rounded-full">
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-col space-y-4">
        {/* Received Message with audio */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p>Hi, What can I help you with?</p>
            </div>
            <span className="text-sm text-gray-500">10:00 PM</span>
          </div>
        </div>

        {/* Audio Message */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex items-center">
                <button className="bg-green-500 w-6 h-6 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </button>
                <div className="w-32 h-4 bg-gray-300 rounded mx-2">
                  {/* Audio wave bar (this can be improved with libraries) */}
                  <div className="w-2/3 h-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-500">1:29</span>
              </div>
            </div>
            <span className="text-sm text-gray-500">10:00 PM</span>
          </div>
        </div>

        {/* Repeated message */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p>Hi, What can I help you with?</p>
            </div>
            <span className="text-sm text-gray-500">10:00 PM</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="mt-4 flex items-center border-t pt-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button className="ml-2 p-2 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamChat;
