"use client";

import React, { useState, useEffect } from "react";

const HomePageHero = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newTime = now.toLocaleTimeString("en-US");
      const newDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
      }).format(now);
      setTime(newTime);
      setDate(newDate);
    }, 1000); // Update time every second

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
          Upcoming Meeting at: 12:30 PM
        </h2>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
          <p className="text-lg font-medium text-sky-1 lg:text-2xl opacity-[0.5]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
