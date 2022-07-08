import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/home.js";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  //determines which page user has chosen to navigate to from NavBar and renders that (and only that)
  const renderPage = () => {
    if (currentPage === "Home") {
      return <home />;
    }
    if (currentPage === "About") {
      return <about />;
    }
    if (currentPage === "Blog") {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <navBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
