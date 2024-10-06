import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const CalendarData = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Calculate days in the month
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const daysArray = [];
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null); // Blank days before the 1st day of the month
    }
    for (let i = 1; i <= lastDate; i++) {
      daysArray.push(i);
    }
    setDaysInMonth(daysArray);
  }, [currentDate]);

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateClick = (day) => {
    if (day) {
      const selected = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      setSelectedDate(selected);
      setSelectedTime(null); // Reset time selection when a new date is selected
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Check if any event is on this specific date
  const isDateWithEvent = (day) => {
    return events.some(
      (event) =>
        new Date(event.date).toDateString() ===
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        ).toDateString()
    );
  };

  // Check if there's an event for the specific time on the selected date
  const isTimeWithEvent = (day, time) => {
    return events.some(
      (event) =>
        new Date(event.date).toDateString() ===
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
          ).toDateString() && event.time === time
    );
  };

  // Find all events for the specific date and time
  const getEventsForDateAndTime = (day, time) => {
    return events.filter(
      (event) =>
        new Date(event.date).toDateString() ===
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
          ).toDateString() && event.time === time
    );
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div>
        <button className="bg-blue-500 text-white mb-4 p-3 rounded-xl shadow-xl shadow-sky-200">
          Add new task
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={prevMonth}
        >
          Prev
        </button>
        <h2 className="text-2xl font-semibold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={nextMonth}
        >
          Next
        </button>
      </div>

      {/* CalendarData Grid */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}

        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`h-10 flex items-center justify-center rounded-lg cursor-pointer 
            ${isDateWithEvent(day) ? "bg-green-200" : "bg-gray-100"} 
            ${
              selectedDate && selectedDate.getDate() === day
                ? "ring-2 ring-blue-500"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Time section when a date is selected */}
      {selectedDate && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{`Selected Date: ${selectedDate.toDateString()}`}</h3>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {times.map((time, index) => (
              <div
                key={index}
                className={`h-10 flex items-center justify-center rounded-lg cursor-pointer 
                ${
                  isTimeWithEvent(selectedDate.getDate(), time)
                    ? "bg-green-200"
                    : "bg-gray-200"
                } 
                ${selectedTime === time ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show event details for the selected time */}
      {selectedTime && (
        <div className="mt-4 p-4 border-t">
          <h3 className="text-lg font-semibold">{`Selected Time: ${selectedTime}`}</h3>
          {/* <ul className="list-disc list-inside mt-2">
            {getEventsForDateAndTime(selectedDate.getDate(), selectedTime)
              .length > 0 ? (
              getEventsForDateAndTime(selectedDate.getDate(), selectedTime).map(
                (event, index) => <li key={index}>{event.title}</li>
              )
            ) : (
              <li>No events for this time slot.</li>
            )}
          </ul> */}
          <ul className="list-disc list-inside mt-2">
            {getEventsForDateAndTime(selectedDate.getDate(), selectedTime)
              .length > 0 ? (
              getEventsForDateAndTime(selectedDate.getDate(), selectedTime).map(
                (event, index) => <li key={index}>{event.title}</li>
              )
            ) : (
              <li>No events for this time slot.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// Adding PropTypes validation
CalendarData.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired, // Event date should be a string (e.g., '2024-10-10')
      time: PropTypes.string.isRequired, // Event time should be a string (e.g., '09:00 AM')
      title: PropTypes.string.isRequired, // Title of the event
    })
  ).isRequired, // Events array is required
};

export default CalendarData;
