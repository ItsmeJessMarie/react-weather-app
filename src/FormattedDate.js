import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let dates = props.date.getDate();
  let hours = props.date.getHours();
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}, {month} {dates}, {hours}:{minutes} {amPm};
    </div>
  );
}
