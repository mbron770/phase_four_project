import Head from "next/head";
import React from "react";
import NavigationBar from "../components/navbar";
import LoginComponent from "../components/logincomponent";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <LoginComponent />

      <h1>Home</h1>
    </div>
  );
}
