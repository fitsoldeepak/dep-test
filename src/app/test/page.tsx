import HomeTemplate from "@/designs/templates/HomeTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is test page",
  description: "Generated by create next app",
};

const TestPage = () => {
  return <HomeTemplate />;
};

export default TestPage;
