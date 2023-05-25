import { useEffect } from "react";
import "./main.css";
import "./custom.css";
import Events from "./components/Event";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";

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
  const url = `https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events/${pathname}`;

  const fetcher = async () => {
    const res = await fetch(url);
    return await res.json();
  };

  const { data, status, refetch } = useQuery("events", fetcher, {
    enabled: false,
  });
  // enable:false - no auto run, call refetch when you want it

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  return (
    <div className="container flex flex-wrap gap-8">
      {status === "success" ? (
        pathname === "/" ? (
          data?.map((event: EventProps) => {
            return (
              <Link
                key={event.id}
                to={`/${String(event.id)}`}
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
              </Link>
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
        )
      ) : (
        status === "loading" && "loading..."
      )}
    </div>
  );
}

export default Home;
