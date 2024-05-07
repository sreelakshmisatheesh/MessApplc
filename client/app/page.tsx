"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import Footer from "./components/Footer";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="TKMCE Hostels"
        description=""
        keywords=""
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Courses />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Page;
