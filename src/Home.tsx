import React, { useEffect } from "react";
import "./main.css";
import "./custom.css";
import Events from "./components/Event";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

export interface EventProps {
  category: string;
  date: string;
  description: string;
  id: number;
  location: string;
  organizer: string;
  petsAllowed: boolean;
  time: string;
  title: string;
}

function Home() {
  const { pathname } = useLocation();
  const url = `https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events`;

  const fetcher = async () => {
    const res = await fetch(`${url + "/" + pathname}`);
    return await res.json();
  };

  const { data, status } = useQuery("events", fetcher);

  return (
    <div className="container flex flex-wrap gap-8">
      {status === "success" &&
        (pathname === "/" ? (
          data?.map((event: EventProps) => {
            return (
              <a
                key={event.id}
                href={`/${String(event.id)}`}
                className="block w-[calc(80%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] mx-auto bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-all"
              >
                <Events
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  organizer={event.organizer}
                  petsAllowed={event.petsAllowed}
                  time={event.time}
                  category={event.category}
                />
              </a>
            );
          })
        ) : (
          <div className="mx-auto bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-all">
            <Events
              id={data.id}
              title={data.title}
              description={data.description}
              location={data.location}
              date={data.date}
              organizer={data.organizer}
              petsAllowed={data.petsAllowed}
              time={data.time}
              category={data.category}
            />
          </div>
        ))}
    </div>
  );
}

export default Home;
