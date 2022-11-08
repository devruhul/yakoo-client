import React from "react";
import { Outlet } from "react-router-dom";

const BookBicycle = () => {
  return (
    // All children will be rendered inside the Outlet component
    <div>
      <Outlet />
    </div>
  );
};

export default BookBicycle;
