import React, { FC } from "react";
import { EventProps } from "../Home";

const Events: FC<EventProps> = ({ title, description, location, date }) => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <img
          src="https://nanotempertech.com/wp-content/uploads/2020/01/conference-audience-ft.png"
          alt=""
          className="rounded-t-xl"
        />
      </div>
      <div className="flex flex-wrap p-3">
        <div className="w-1/5 flex flex-col text-center uppercase">
          <span className="block text-sm">
            {new Date(date).toLocaleString("en-US", { month: "short" })}
          </span>
          <span className="block text-2xl text-red-600 font-bold">
            {new Date(date).getDate()}
          </span>
          <span className="block text-sm">{new Date(date).getFullYear()}</span>
        </div>
        <div className="w-4/5 pl-3">
          <p className="text-lg font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex rounded-b-xl bg-gray-100">
        <div className="m-3 flex">
          <span className="text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="pl-2 text-sm font-semibold tracking-wide uppercase">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Events;
