import React from "react";
import BookmarkList from "../components/BookmarkList";

const Bookmarks = () => {
  const bookmarkedJobs =
    JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];

  return (
    <div>
      <h2>Bookmarked Jobs</h2>
      <BookmarkList jobs={bookmarkedJobs} />
    </div>
  );
};

export default Bookmarks;
