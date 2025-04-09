"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    id: number;
    role: string;
  }>();

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "https://dev.fitsolscs.com/api/v1/auth/getMe",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authUser")}`,
          },
        }
      );

      setData(data.data.data);
    })();
  }, []);

  return (
    <div className="pl-8">
      <p>Login User Info</p>
      <ul className="list-disc pl-8">
        <li>Id: {data?.id}</li>
        <li>Name: {data?.name}</li>
        <li>Email: {data?.email}</li>
        <li>Role: {data?.role}</li>
      </ul>
    </div>
  );
};

export default Profile;
