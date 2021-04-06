import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form>
      <input type="search" placeholder="Search a city..."></input>
      <input type="submit" value="search" className="btn btn-primary w-100" />
    </form>
  );
}
