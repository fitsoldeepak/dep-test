"use client";

import React, { useEffect } from "react";
import { Button } from "@/designs/atoms/button";
import { useCombineStore } from "@/zustand-store";

const HomeTemplate = () => {
  const { count, user, setUser, decrement, increment } = useCombineStore();

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.data.type === "OPEN_MODAL") {
        console.log("hi....", event);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="p-4">
      <p>counter: {count}</p>
      <p>name: {user}</p>
      <input
        value={user || ""}
        className="p-2 border my-2"
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      <div className="flex gap-2">
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};

export default HomeTemplate;
